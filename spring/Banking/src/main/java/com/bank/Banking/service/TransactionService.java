package com.bank.Banking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.AccRepository;
import com.bank.Banking.dao.TransactionRepository;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.Transaction;

@Service
public class TransactionService {
	@Autowired
	TransactionRepository transRepo;
	
	@Autowired
	AccRepository accRepo;
	
	public Transaction transact(Transaction trans)
	{
		long accnumber = trans.getAccFrom();
		Account acc = accRepo.findById(accnumber).get();
		double balance = acc.getBalance();
		double amt = trans.getAmount();
		if(amt > balance || accRepo.findById(trans.getAccTo()).isEmpty())
			trans.setStatus("FAIL");
		else {
			trans.setStatus("SUCESS");
			balance -= amt;
			acc.setBalance(balance);
			accRepo.save(acc);
		}
		trans.setAcc_no(acc);
		return transRepo.save(trans);
	}
}