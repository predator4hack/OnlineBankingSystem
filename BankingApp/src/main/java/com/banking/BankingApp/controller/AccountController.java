package com.banking.BankingApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.BankingApp.model.Account;
import com.banking.BankingApp.model.Transaction;
import com.banking.BankingApp.service.AccountService;

@RestController
@CrossOrigin("*")
public class AccountController {
	@Autowired
	AccountService accService;
	
	
	@PostMapping("/createAccount/{uname}")
	
	public String createAccount(@RequestBody Account account,@PathVariable("uname")String userid) {
		
		String result="";
		Account acc=accService.createAccount(account, userid);
		
		if(acc!=null) {
			result="Account created";
		}
		else {
			result="Account creation failed";
		}
		
		return result;
		
	}
	
	
	@GetMapping("/fetchTransactions/{accountno}")
	public List<Transaction> fetchTransactions(@PathVariable("accountno") long accountno)
	{
		List<Transaction> result = accService.fetchTransactions(accountno);
		return result;
	}
	
	

}
