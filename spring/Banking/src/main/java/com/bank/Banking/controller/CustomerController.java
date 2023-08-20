package com.bank.Banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
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

@RestController
@CrossOrigin("*")
public class CustomerController {
	@Autowired
	CustomerService custService;
	
	@PostMapping("/saveCustomer")
	public String saveCustomer(@RequestBody Customer cust)
	{
		return custService.saveCustomer(cust);
	}
	
	@PostMapping("/login")
	public String validateCustomer(@RequestBody LoginModel u)
	{
		return custService.validateCustomer(u);
	}
	
	@GetMapping("/fetchAccounts/{username}")
	public List<Account> fetchAccounts(@PathVariable("username") String username)
	{
		List<Account> acc = custService.fetchAccounts(username);
		return acc;
	}
	
	@PutMapping("/changePassword/{otp}")
	public String changePassword(@RequestBody LoginModel u, @PathVariable("otp") String otp)
	{
		return custService.changePassword(u, otp);
	}
	
	@GetMapping("/fetchUser/{userid}")
	public Customer fetchUser(@PathVariable("userid") String userid)
	{
		return custService.fetchUser(userid);
	}
}