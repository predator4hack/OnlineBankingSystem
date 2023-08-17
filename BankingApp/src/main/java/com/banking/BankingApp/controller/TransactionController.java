package com.banking.BankingApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.BankingApp.model.Transaction;
import com.banking.BankingApp.service.TransactionService;

@RestController

public class TransactionController {
	
	@Autowired
	TransactionService transService;
	
	@PostMapping("/transact")
	
	public String doTransaction(@RequestBody Transaction transaction) {
		
		String result="";
		
		Transaction trans = transService.transact(transaction);
		
		if(trans==null) {
			result="Transaction failed";
		}
		else {
			result="Transaction Success";
		}
		return result;
	}
	
	
	

}
