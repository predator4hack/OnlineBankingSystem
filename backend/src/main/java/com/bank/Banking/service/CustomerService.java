package com.bank.Banking.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.AccRepository;
import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.JwtResponse;
import com.bank.Banking.model.LoginModel;
import com.bank.Banking.model.MessageResponse;
import com.bank.Banking.security.JwtUtils;
import com.bank.Banking.exceptions.NoDataFoundException;
import com.bank.Banking.exceptions.ResourceNotFoundException;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository custRepo;

	@Autowired
	AccRepository accRepo;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtils jwtUtils;

	public ResponseEntity<?> saveCustomer(Customer cust) {
		Optional<Customer> o = custRepo.findById(cust.getUserId());
		if(o.isPresent()) {
			return ResponseEntity.badRequest().body(new MessageResponse("Username Already Exists"));
		}
		cust.setPassword(encoder.encode(cust.getPassword()));
		custRepo.save(cust);
		String jwt = jwtUtils.generateJwtTokenUser(cust.getUserId());
		return ResponseEntity.ok(new JwtResponse(jwt, cust.getUserId()));
	}

	public ResponseEntity<?> validateCustomer(LoginModel loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUserId(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		Customer cust = (Customer) authentication.getPrincipal();
		return ResponseEntity.ok(new JwtResponse(jwt, cust.getUserId()));
	}

	public List<Account> fetchAccounts(String username) throws NoDataFoundException {
		if (accRepo.findByUsername(username).isEmpty()) {
			throw new NoDataFoundException("No Data to Display");
		}
		return accRepo.findByUsername(username);
	}

	public ResponseEntity<?> changePassword(LoginModel u, String otp) {
		Customer cust = null;
		Optional<Customer> obj = custRepo.findById(u.getUserId());

		if (obj.isPresent())
			cust = obj.get();
		if (cust == null)
			return ResponseEntity.badRequest().body(new MessageResponse("Invalid customer"));
		if (otp.equals("111111")) {
			cust.setPassword(encoder.encode(u.getPassword()));
			custRepo.save(cust);
			return ResponseEntity.ok(new MessageResponse("Successfully Changed the password!"));
		}
		return ResponseEntity.badRequest().body(new MessageResponse("Invalid OTP!"));
	}

	public ResponseEntity<?> changeDetails(Customer u) {
		Optional<Customer> obj = custRepo.findById(u.getUserId());
		Customer cust = null;
		if (obj.isPresent())
			cust = obj.get();
		if (cust == null)
			return ResponseEntity.badRequest().body(new MessageResponse("Invalid Customer"));
		cust.setFathername(u.getFathername());
		cust.setMothername(u.getMothername());
		cust.setPermanentAddress(u.getPermanentAddress());
		cust.setCurrentAddress(u.getCurrentAddress());
		custRepo.save(cust);
		return ResponseEntity.ok(new MessageResponse("Success"));
	}

	public Customer fetchUser(String userid) throws ResourceNotFoundException {
		Customer u = custRepo.findById(userid).orElse(null);
		if (u == null)
			throw new ResourceNotFoundException("User not found");
		return u;
	}

}