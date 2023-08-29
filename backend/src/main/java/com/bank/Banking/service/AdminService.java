package com.bank.Banking.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.AccRepository;
import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.dao.AdminRepository;
import com.bank.Banking.dao.TransactionRepository;
import com.bank.Banking.exceptions.NoDataFoundException;
import com.bank.Banking.exceptions.ResourceNotFoundException;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.Admin;
import com.bank.Banking.model.Transaction;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {
	@Autowired
	CustomerRepository custRepo;
	
	@Autowired
	AccRepository accRepo;
	
	@Autowired
	TransactionRepository transRepo;
	
	@Autowired
	AdminRepository adminRepo;
	
	public String saveAdmin(Admin admin)
	{
		String result = "";
		Optional<Admin> o = adminRepo.findById(admin.getUserid());
		if(o.isPresent())
		{
			result = "Admin already exists!";
		}
		else {
			result = "Admin created successfully!";
			Admin obj = adminRepo.save(admin);
		}
		return result;
	}
	
	public String adminLogin(Admin u)
	{
		Admin admin = null;
		String result = "";
		
		Optional<Admin> obj = adminRepo.findById(u.getUserid());
		
		if(obj.isPresent())
		{
			admin = obj.get();
		}
		if(admin == null)
		{
			result = "Invalid Admin";
		}
		else
		{
			if(u.getPassword().equals(admin.getPassword()))
			{
				result = "Login success";
			}
			else
			{
				result = "Login failed";
			}
		}
		return result;
	}
	
	public String toggleDisable(long accno, String userid)
	{
		if(accRepo.findById(accno).isEmpty())
			return "Account not found";
		Account acc = accRepo.findById(accno).get();
		if(acc.isDisabled() == true)
		{
			acc.setDisabled(false);
			accRepo.save(acc);
			return "Account enabled";
		}
		else {
			if((acc.getBalance() < 10000 && acc.getAcctype().equals("Savings")) || (acc.getBalance() < 25000 && acc.getAcctype().equals("Current")) || (acc.getBalance() < 5000 && acc.getAcctype().equals("Salary")))
			{
				acc.setDisabled(true);
				accRepo.save(acc);
				return "Account Disabled";
			}
			else
				return "Account cannot be disabled";
		}
	}
	
	public List<Customer> getCustomers(String userid) throws NoDataFoundException
	{
		if(adminRepo.findById(userid).isEmpty())
		{
			throw new NoDataFoundException("No Customers to Display");
//			List<Customer> res = new ArrayList<>();
//			return res;
		}
		return custRepo.findAll();
	}
	
	public List<Account> getAccounts(String userid)  throws NoDataFoundException
	{
		if(adminRepo.findById(userid).isEmpty())
		{
//			List<Account> res = new ArrayList<>();
//			return res;
			throw new NoDataFoundException("No Accounts to Display");
		}
		return accRepo.findAll();
	}
	
	public List<Transaction> getTransactions(String userid)  throws NoDataFoundException
	{
		if(adminRepo.findById(userid).isEmpty())
		{
//			List<Transaction> res = new ArrayList<>();
//			return res;
			throw new NoDataFoundException("No Transactions to Display");
		}
		return transRepo.findAll();
	}
	
	
	public Admin fetchAdmin(String username) throws ResourceNotFoundException
	{
		Admin a  = adminRepo.findById(username).orElse(null);
		if(a==null)
			throw new ResourceNotFoundException("Admin Not Found");
		else
			return a;
	}
}
