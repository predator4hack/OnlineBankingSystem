package com.bank.Banking.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.LoginModel;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository custRepo;
	
	public String saveCustomer(Customer cust)
	{
		String result = "";
		Optional<Customer> o = custRepo.findById(cust.getUserId());
		if(o.isPresent())
		{
			result = "Customer already exists!";
		}
		else {
			result = "Customer created successfully!";
			Customer obj = custRepo.save(cust);
		}
		return result;
	}
	
	public String validateCustomer(LoginModel u)
	{
		Customer cust = null;
		String result = "";
		
		Optional<Customer> obj = custRepo.findById(u.getUserId());
		
		if(obj.isPresent())
		{
			cust = obj.get();
		}
		if(cust == null)
		{
			result = "Invalid Customer";
		}
		else
		{
			if(u.getPassword().equals(cust.getPassword()))
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
}