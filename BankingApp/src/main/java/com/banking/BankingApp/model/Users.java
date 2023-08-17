package com.banking.BankingApp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;



import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.List;

import org.hibernate.validator.constraints.Length;



@Entity
public class Users {
	@Id
	@Column(nullable=false)
	private String userid;
	
	@Column(nullable=false)
	private String name;
	
	@Column(nullable=false)
	@Length(min=8, max=20, message="Password must be between 8 to 20 characters")
	private String password;
	
	@Column(nullable=false)
	private long phoneno;
	
	@Email(message="email must be valid")
	@Column(nullable=false)
	private String email;
	
	@Column(nullable=false)
	private String aadhaarno;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="userid")
	private List<accounts> account;

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

	public long getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAadhaarno() {
		return aadhaarno;
	}

	public void setAadhaarno(String aadhaarno) {
		this.aadhaarno = aadhaarno;
	}

}

	