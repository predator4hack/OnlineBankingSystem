package com.banking.BankingApp.service;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.BankingApp.dao.AccountRepository;
import com.banking.BankingApp.dao.TransactionRepository;
import com.banking.BankingApp.model.Account;
import com.banking.BankingApp.model.Transaction;





@Service
public class TransactionService {
	
	@Autowired
	TransactionRepository transRepository;
	
	@Autowired
	AccountRepository accRepository;
	
	

	public Transaction transact(Transaction transaction) {
		// TODO Auto-generated method stub
		
		long accountno = transaction.getAccountfrom();
		long accountto = transaction.getAccountto();
		
		Account account = accRepository.findById(accountno).get();
		
		double balance = account.getBalance();
		
		
		double amount = transaction.getAmount();
		
		if(amount>balance || accRepository.findById(accountto).isEmpty()) {
			transaction.setStatus("FAIL");
			
		}
		else {
			Account accountsec = accRepository.findById(accountto).get();
			transaction.setStatus("SUCCESS");
			
			balance -= amount;
			if(accountno!=accountto) {
				
				double balancesec = accountsec.getBalance();
				balancesec +=amount;
				accountsec.setBalance(balancesec);

				accRepository.save(accountsec);
			}
			
			account.setBalance(balance);
			accRepository.save(account);
		}
	
		transaction.setAcc_no(account);
		String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new java.util.Date());
		transaction.setTimestamp(timeStamp);
		return transRepository.save(transaction);
	}
	
	


	

}
