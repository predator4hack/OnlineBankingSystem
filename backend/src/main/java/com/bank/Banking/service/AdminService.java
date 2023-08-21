package com.bank.Banking.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.AccRepository;
import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.dao.AdminRepository;
import com.bank.Banking.dao.TransactionRepository;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.LoginModel;
import com.bank.Banking.model.Admin;
import com.bank.Banking.model.Transaction;
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
	
	public List<Customer> getCustomers()
	{
		return custRepo.findAll();
	}
	
	public List<Account> getAccounts()
	{
		return accRepo.findAll();
	}
	
	public List<Transaction> getTransactions()
	{
		return transRepo.findAll();
	}
}
