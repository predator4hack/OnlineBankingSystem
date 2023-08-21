package com.bank.Banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.Admin;
import com.bank.Banking.model.Transaction;
import com.bank.Banking.service.AdminService;


@RestController
@CrossOrigin("*")
public class AdminController {
	@Autowired
	AdminService adminService;
	
	@PostMapping("/saveAdmin")
	public String saveAdmin(@RequestBody Admin admin)
	{
		return adminService.saveAdmin(admin);
	}
	
	@PostMapping("/adminLogin")
	public String adminLogin(@RequestBody Admin admin)
	{
		return adminService.adminLogin(admin);
	}
	
	@GetMapping("/getAllCustomers")
	public List<Customer> getCustomers()
	{
		return adminService.getCustomers();
	}
	
	@GetMapping("/getAllAccounts")
	public List<Account> getAccounts()
	{
		return adminService.getAccounts();
	}
	
	@GetMapping("/getAllTransactions")
	public List<Transaction> getTransactions()
	{
		return adminService.getTransactions();
	}
}
