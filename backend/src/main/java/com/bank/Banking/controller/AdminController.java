package com.bank.Banking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.bank.Banking.exceptions.NoDataFoundException;
import com.bank.Banking.exceptions.ResourceNotFoundException;
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
	
	@PostMapping("/disable/{accno}/{userid}")
	public String toggleDisable(@PathVariable("accno") long accno, @PathVariable("userid") String userid)
	{
		return adminService.toggleDisable(accno, userid);
	}
	
	@GetMapping("/getAllCustomers/{userid}")
	public List<Customer> getCustomers(@PathVariable("userid") String userid) throws NoDataFoundException
	{
		return adminService.getCustomers(userid);
	}
	
	@GetMapping("/getAllAccounts/{userid}")
	public List<Account> getAccounts(@PathVariable("userid") String userid)  throws NoDataFoundException
	{
		return adminService.getAccounts(userid);
	}
	
	@GetMapping("/getAllTransactions/{userid}")
	public List<Transaction> getTransactions(@PathVariable("userid") String userid)  throws NoDataFoundException
	{
		return adminService.getTransactions(userid);
	}
	
	@GetMapping("/fetchAdmin/{username}")
	  
	  public Admin fetchAdmin(@PathVariable("username") String username) throws ResourceNotFoundException{
		  return adminService.fetchAdmin(username);
	  }
}
