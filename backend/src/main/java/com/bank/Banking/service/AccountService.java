package com.bank.Banking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.AccRepository;
import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.dao.TransactionRepository;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.AccountStatement;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.Transaction;

import java.util.List;
import java.util.Random;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;

@Service
public class AccountService {
	@Autowired
	AccRepository accRepo;
	
	@Autowired
	CustomerRepository custRepo;
	
	@Autowired
	TransactionRepository transRepo;
	
	
	public Account createAccount(Account account, String userid) {
		long generatedNumber = 0;
		Random rand = new Random();
		generatedNumber = 999999 + rand.nextLong(1000000);
		while(accRepo.findById(generatedNumber).isPresent())
		{
			generatedNumber = 999999 + rand.nextLong(1000000);
		}
		Customer u = custRepo.findById(userid).get();
		String branch = account.getBranch();
		String ifsc = branch.substring(0, 3) + (int)(branch.charAt(branch.length()-1)) + (int)(branch.charAt(branch.length()-2));
		account.setUser(u);
		account.setAccno(generatedNumber);
		account.setIfsc(ifsc);
		account.setDisabled(false);
		return accRepo.save(account);
	}
	
	public List<Transaction> fetchTransactions(long accno) {
		return transRepo.findByAccountNumber(accno, "SUCCESS");
	}
	
	public Account getAccountDetails(long accno) {
		return accRepo.findById(accno).get();
	}
	
	public List<Transaction> accountStatement(long accno, AccountStatement accStat)
	{
		List<Transaction> trans = transRepo.findByAccountNumber(accno, "SUCCESS");
		List<Transaction> result = new ArrayList<Transaction>();
		
		String startDate = accStat.getStartDate();
		String endDate = accStat.getEndDate();
		
		int startYear = Integer.parseInt(startDate.substring(0, 4));
		int startMonth = Integer.parseInt(startDate.substring(5, 7));
		int startDay = Integer.parseInt(startDate.substring(8, 10));
		
		Date start = new GregorianCalendar(startYear, startMonth - 1, startDay).getTime();
		
		int endYear = Integer.parseInt(endDate.substring(0, 4));
		int endMonth = Integer.parseInt(endDate.substring(5, 7));
		int endDay = Integer.parseInt(endDate.substring(8, 10));
		
		Date end = new GregorianCalendar(endYear, endMonth - 1, endDay).getTime();
		
		for(int i=0;i<trans.size();i++){
			int year = Integer.parseInt(trans.get(i).getTimestamp().substring(0, 4));
			int month = Integer.parseInt(trans.get(i).getTimestamp().substring(5, 7));
			int day = Integer.parseInt(trans.get(i).getTimestamp().substring(8, 10));
			
			Date curr = new GregorianCalendar(year, month - 1, day).getTime();
			
			if(!start.after(curr) && !end.before(curr))
				result.add(trans.get(i));
		}
		return result;
	}
}