package com.bank.Banking.model;

import jakarta.persistence.*;

import java.util.List;


@Entity
public class Customer {
	@Id
	private String userId;
	private String name;
	private String password;
	private long mobile;
	private String email;
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
