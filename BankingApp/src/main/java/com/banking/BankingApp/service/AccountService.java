package com.banking.BankingApp.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.banking.BankingApp.dao.AccountRepository;
import com.banking.BankingApp.dao.TransactionRepository;
import com.banking.BankingApp.dao.UserRepository;
import com.banking.BankingApp.model.Account;
import com.banking.BankingApp.model.Transaction;
import com.banking.BankingApp.model.User;

@Service
public class AccountService {
	@Autowired
	AccountRepository accRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	TransactionRepository transRepo;
	
	public Account createAccount(Account account, String userid) {
		
		
		long generatedNumber = 0;
		Random rand = new Random();
		generatedNumber = 999999 + rand.nextLong(1000000);
		User u = userRepo.findById(userid).get();
		account.setUser(u);
		account.setAccountno(generatedNumber);
		return accRepo.save(account);
		
		
//		User u= userRepo.findById(username).get();
//		account.setUser(u);
//		return accRepo.save(account);
	}

	public List<Transaction> fetchTransactions(long accountno) {
		// TODO Auto-generated method stub
		return transRepo.findByAccountNumber(accountno);
	}
	
	

}
