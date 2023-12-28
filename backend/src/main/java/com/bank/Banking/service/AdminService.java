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
import com.bank.Banking.dao.AdminRepository;
import com.bank.Banking.dao.TransactionRepository;
import com.bank.Banking.exceptions.NoDataFoundException;
import com.bank.Banking.exceptions.ResourceNotFoundException;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.JwtResponse;
import com.bank.Banking.model.Admin;
import com.bank.Banking.model.Transaction;
import com.bank.Banking.security.JwtUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {
	@Autowired
	CustomerRepository custRepo;
	
	@Autowired
	AccRepository accRepo;
	
	@Autowired
	TransactionRepository transRepo;
	
	@Autowired
	AdminRepository adminRepo;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	JwtUtils jwtUtils;
	
	public ResponseEntity<?> saveAdmin(Admin admin) {
		Optional<Admin> o = adminRepo.findById(admin.getUserid());
		if(o.isPresent())
			return ResponseEntity.badRequest().body("Admin already exists");
		admin.setPassword(encoder.encode(admin.getPassword()));
		adminRepo.save(admin);
		String jwt = jwtUtils.generateJwtTokenUser(admin.getUserid());
		return ResponseEntity.ok(new JwtResponse(jwt, admin.getUserid()));
	}
	
	public ResponseEntity<?> adminLogin(Admin loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUserid(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		return ResponseEntity.ok(new JwtResponse(jwt, loginRequest.getUserid()));
	}
	
	public String toggleDisable(long accno, String userid) {
		if(accRepo.findById(accno).isEmpty())
			return "Account not found";
		Account acc = accRepo.findById(accno).get();
		if(acc.isDisabled() == true) {
			acc.setDisabled(false);
			accRepo.save(acc);
			return "Account enabled";
		}
		else {
			if((acc.getBalance() < 10000 && acc.getAcctype().equals("Savings")) || (acc.getBalance() < 25000 && acc.getAcctype().equals("Current")) || (acc.getBalance() < 5000 && acc.getAcctype().equals("Salary"))) {
				acc.setDisabled(true);
				accRepo.save(acc);
				return "Account Disabled";
			}
			else
				return "Account cannot be disabled";
		}
	}
	
	public List<Customer> getCustomers(String userid) throws NoDataFoundException {
		if(adminRepo.findById(userid).isEmpty()) {
			throw new NoDataFoundException("No Customers to Display");
		}
		return custRepo.findAll();
	}
	
	public List<Account> getAccounts(String userid)  throws NoDataFoundException {
		if(adminRepo.findById(userid).isEmpty()) {
			throw new NoDataFoundException("No Accounts to Display");
		}
		return accRepo.findAll();
	}
	
	public List<Transaction> getTransactions(String userid)  throws NoDataFoundException {
		if(adminRepo.findById(userid).isEmpty())
		{
			throw new NoDataFoundException("No Transactions to Display");
		}
		return transRepo.findAll();
	}
	
	
	public Admin fetchAdmin(String username) throws ResourceNotFoundException {
		Admin a  = adminRepo.findById(username).orElse(null);
		if(a==null)
			throw new ResourceNotFoundException("Admin Not Found");
		else
			return a;
	}
}
