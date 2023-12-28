package com.bank.Banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.LoginModel;
import com.bank.Banking.service.CustomerService;
import com.bank.Banking.exceptions.NoDataFoundException;
import com.bank.Banking.exceptions.ResourceNotFoundException;

@RestController
@CrossOrigin("*")
public class CustomerController {
	@Autowired
	CustomerService custService;
	
	@GetMapping("/test")
	public String testCustomer() {
		return "It's OK";
	}

	@PostMapping("/signup")
	public ResponseEntity<?> saveCustomer(@RequestBody Customer cust) {
		return custService.saveCustomer(cust);
	}

	@PostMapping("/login")
	public ResponseEntity<?> validateCustomer(@RequestBody LoginModel loginRequest) {
		return custService.validateCustomer(loginRequest);
	}

	@PutMapping("/changeDetails")
	public ResponseEntity<?> changeDetails(@RequestBody Customer u) {
		return custService.changeDetails(u);
	}

	@GetMapping("/fetchAccounts/{username}")
	public List<Account> fetchAccounts(@PathVariable("username") String username) throws NoDataFoundException {
		List<Account> acc = custService.fetchAccounts(username);
		return acc;
	}

	@PutMapping("/changePassword/{otp}")
	public ResponseEntity<?> changePassword(@RequestBody LoginModel u, @PathVariable("otp") String otp) {
		return custService.changePassword(u, otp);
	}

	@GetMapping("/fetchUser/{username}")
	public Customer fetchUser(@PathVariable("username") String username) throws ResourceNotFoundException {
		return custService.fetchUser(username);
	}
}