package com.bank.Banking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.model.Customer;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository custRepo;
	
	public Customer saveCustomer(Customer cust)
	{
		Customer obj = custRepo.save(cust);
		return obj;
	}
}