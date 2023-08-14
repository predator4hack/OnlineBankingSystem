package com.bank.Banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}