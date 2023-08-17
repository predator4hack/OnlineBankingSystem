package com.banking.BankingApp.services;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.banking.Banking.controller.List;
//import com.banking.Banking.controller.Transactions;
import com.banking.BankingApp.dao.AccountRepository;
import com.banking.BankingApp.dao.TransactionsRepository;
import com.banking.BankingApp.dao.UsersRepository;
import com.banking.BankingApp.model.Transactions;
import com.banking.BankingApp.model.Users;
import com.banking.BankingApp.model.accounts;

@Service
public class AccountService {
	
	@Autowired
	AccountRepository accRepo;
	@Autowired
	UsersRepository userRepo;
	
	@Autowired
	TransactionsRepository transRepo;
	
	public accounts createAccount(accounts account, String userid)
	{long generatedNumber = 0;
	Random rand = new Random();
	generatedNumber = 999999 + rand.nextLong(1000000);
	Users u = userRepo.findById(userid).get();
	account.setUser(u);
	account.setAccountno(generatedNumber);
	return accRepo.save(account);

	}


	public List<Transactions> fetchTransactions(long accountno) {
		return transRepo.findByAccountNumber(accountno);
	}

}
