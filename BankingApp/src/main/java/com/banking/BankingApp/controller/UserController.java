package com.banking.BankingApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.BankingApp.model.LoginModel;
import com.banking.BankingApp.model.User;
import com.banking.BankingApp.service.UserService;


@RestController
@CrossOrigin("*")
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping("/saveUser")
	public User saveUser(@RequestBody User cust) 
	{
		User u = userService.saveUser(cust);
		return u;
	}
	
	@PostMapping("/checkLogin")
	
	public String validateUser(@RequestBody LoginModel u) {
		
		return userService.validateUser(u);
	}
	

}
