package com.bank.Banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bank.Banking.model.Account;
import com.bank.Banking.service.AccountService;

@RestController
@CrossOrigin("*")
public class AccountController {
	@Autowired
	AccountService accService;
	
	@PostMapping("/createAccount/{uname}")
	public String createAccount(@RequestBody Account account, @PathVariable("uname") String userid)
	{
		String result = "";
		Account acc = accService.createAccount(account, userid);
		
		if(acc != null)
			result = "Account created!";
		else
			result = "Account creation failed!";
		return result;
	}
}