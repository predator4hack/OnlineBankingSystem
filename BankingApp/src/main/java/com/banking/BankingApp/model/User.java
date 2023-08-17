package com.banking.BankingApp.model;
import jakarta.persistence.Entity;
import org.hibernate.validator.constraints.Length;
import java.lang.String;
import jakarta.validation.constraints.Email;

import jakarta.persistence.*;

import jakarta.persistence.Id;
import jakarta.persistence.Column;
import java.util.List;

@Entity
public class User {
	@Id
	
	@Column(nullable=false)
	private String userid;
	
	@Column(nullable=false)
	private String name;
	
	@Column(nullable=false)
	@Length(min=8, max=20, message="Password must be between 8 to 20 characters")
	private String password;
	
	
	@Column(nullable=true)
	private String aadharno;
	
	@Email(message="email must be valid")
	@Column(nullable=true)
	private String email;
	
	
	@Column(nullable=true)
	private long phoneno;
	
	
	
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private List<Account> account;



	public String getUserid() {
		return userid;
	}



	public void setUserid(String userid) {
		this.userid = userid;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getAadharno() {
		return aadharno;
	}



	public void setAadharno(String aadharno) {
		this.aadharno = aadharno;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public long getPhoneno() {
		return phoneno;
	}



	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}



	public List<Account> getAccount() {
		return account;
	}



	public void setAccount(List<Account> account) {
		this.account = account;
	}
	
	

	
	
	
	
	
	
	
	
}