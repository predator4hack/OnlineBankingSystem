package com.bank.Banking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.AccRepository;
import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import java.util.Random;

@Service
public class AccountService {
	@Autowired
	AccRepository accRepo;
	
	@Autowired
	CustomerRepository custRepo;
	
	public Account createAccount(Account account, String userid) {
		long generatedNumber = 0;
		Random rand = new Random();
		generatedNumber = 999999 + rand.nextLong(1000000);
		while(accRepo.findById(generatedNumber).isPresent())
		{
			generatedNumber = 999999 + rand.nextLong(1000000);
		}
		Customer u = custRepo.findById(userid).get();
		account.setUser(u);
		account.setAccno(generatedNumber);
		return accRepo.save(account);
	}
}