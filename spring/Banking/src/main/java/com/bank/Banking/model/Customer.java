package com.bank.Banking.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.List;

import org.hibernate.validator.constraints.Length;



@Entity
public class Customer {
	@Id
	@Column(nullable=false)
	private String userId;
	
	@Column(nullable=false)
	private String name;
	
	@Column(nullable=false)
	@Length(min=8, max=20, message="Password must be between 8 to 20 characters")
	private String password;
	
	@Column(nullable=false)
	private long mobile;
	
	@Email(message="email must be valid")
	@Column(nullable=false)
	private String email;
	
	@Column(nullable=false)
	private String aadhar;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private List<Account> account;

	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
}
