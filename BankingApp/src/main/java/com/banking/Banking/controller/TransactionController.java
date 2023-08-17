package com.banking.Banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.BankingApp.model.Transactions;
import com.banking.BankingApp.services.TransactionService;
@RestController
public class TransactionController {

	
	@Autowired
	TransactionService transService;
	
	@PostMapping("/transact")
	
	public String doTransaction(@RequestBody Transactions transaction)
	{
		String result="";
		Transactions trans = transService.transact(transaction);
		if(trans==null)
		{
			result = " transaction failed";
			
		}
		else
		{
			result = "SUCCESS";
		}
		return result;
	}
	
}
