package com.banking.Banking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.BankingApp.model.Transactions;
import com.banking.BankingApp.model.accounts;
import com.banking.BankingApp.services.AccountService;

@RestController
@CrossOrigin("*")
public class AccountController {
@Autowired
AccountService accService;


@PostMapping("/createAccount/{uname}")
public String createAccount(@RequestBody accounts account, @PathVariable("uname") String username)
{
	String result="";
	
	accounts acc = accService.createAccount(account, username);
	

	if(acc!=null)
	{
		result = "Account Created";
	}
	else
	{
		result="Account Creation Failed !";
	}
	return result;
}


@GetMapping("/fetchTransactions/{accountno}")
public List <Transactions> fetchTransactions(@PathVariable("accountno") long accountno)
{
	List<Transactions> result = accService.fetchTransactions(accountno);
	return result;
}


}
