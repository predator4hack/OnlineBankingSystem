package com.banking.BankingApp.model;
import jakarta.persistence.Entity;
import java.lang.String;



import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class LoginModel {
	@Id
	@Column(unique=true)
	
	private String userid;

	private String password;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
	
	
	
	
	
	
	
}