package com.bank.Banking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.model.Customer;



@Service
public class CustomUserDetailsService implements UserDetailsService{
	@Autowired
	CustomerRepository custRepo;
	
	 @Override
	 @Transactional
	  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	  Customer user = custRepo.findById(username)
	        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

	    return user;
	  }
}
