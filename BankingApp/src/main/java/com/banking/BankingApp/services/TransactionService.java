package com.banking.BankingApp.services;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.BankingApp.dao.AccountRepository;
import com.banking.BankingApp.dao.TransactionsRepository;
import com.banking.BankingApp.model.Transactions;
import com.banking.BankingApp.model.accounts;

@Service
public class TransactionService {

	@Autowired
	TransactionsRepository transRepository;
	
	
	@Autowired
	AccountRepository accRepository;
	
	
	
	public Transactions transact(Transactions trans)
	{
		long accountno = trans.getAccountfrom();
		long toAccNum = trans.getAccountto();
		accounts acc =accRepository.findById(accountno).get();
		double balance = acc.getAccountBalance();
		double amount = trans.getAmount();
		
		if(amount>balance || accRepository.findById(toAccNum).isEmpty())
		{
			trans.setStatus("FAIL");
		}
		else
		{
			accounts acc2 = accRepository.findById(toAccNum).get();
			trans.setStatus("SUCCESS");
			balance -=amount;
		
		
		if(accountno!=toAccNum)
		{
			double balance2 = acc2.getAccountBalance();
			balance2+=amount;
			acc2.setAccountBalance(balance2);
			accRepository.save(acc2);
		}
			
		acc.setAccountBalance(balance);
		accRepository.save(acc);
	}
		trans.setAcc_no(acc);
		String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new java.util.Date());
		trans.setTimestamp(timeStamp);
		return transRepository.save(trans);
	
	}
}
