package com.banking.Banking.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.BankingApp.Exceptions.ResourceNotFoundException;
import com.banking.BankingApp.model.LoginModel;
import com.banking.BankingApp.model.Users;
import com.banking.BankingApp.services.UserService;



@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
  @Autowired
  UserService userService;
  
  
  @PostMapping("/checkLogin")
  public String validateUser(@RequestBody LoginModel u)
  {
	  return userService.validateUser(u);
  }
  
  @PostMapping("/saveUsers")
		public Users saveUsers(@RequestBody Users user)

		{
			Users u = userService.saveUsers(user);
			return u;
		}
  
  
  
  @GetMapping("/findUser/{username}")
  
  public Users findUser(@PathVariable("username") String username) throws ResourceNotFoundException{
	  return userService.findUser(username);
  }
}
