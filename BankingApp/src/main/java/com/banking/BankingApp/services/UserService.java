package com.banking.BankingApp.services;

import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.BankingApp.dao.UsersRepository;
import com.banking.BankingApp.model.LoginModel;
import com.banking.BankingApp.model.Users;

@Service
public class UserService {
	@Autowired
	UsersRepository userRepo;
	public Users saveUsers(Users user) {
		// TODO Auto-generated method stub
		Users obj = userRepo.save(user);
		return obj;
	}
	public String validateUser(LoginModel u) {
		// TODO Auto-generated method stub
		String result="";
		Users user =null;
		Optional<Users> obj = userRepo.findById(u.getUserid());
		if(obj.isPresent()) {
			user= obj.get();
		}
		if(user==null)
		{
			result = "Invalid User";
		}
		else
		{
			if(u.getPassword().equals(user.getPassword()))
			{
				result ="Login Success";
			}
			else
				
			{
				result = "Login failed";
			}
		}
		return result;
	}

}
