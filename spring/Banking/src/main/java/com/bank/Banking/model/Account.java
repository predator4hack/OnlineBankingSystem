package com.bank.Banking.model;

import jakarta.persistence.*;
import java.util.List;



@Entity
public class Account {
	@Id
	private long accno;
	private String acctype;
	private double balance;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private Customer user;
	
	public Customer getUser() {
		return user;
	}
	public void setUser(Customer user) {
		this.user = user;
	}
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="acc_no")
	private List<Transaction> transaction;
	
	
	public long getAccno() {
		return accno;
	}
	public void setAccno(long accno) {
		this.accno = accno;
	}
	public String getAcctype() {
		return acctype;
	}
	public void setAcctype(String acctype) {
		this.acctype = acctype;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	
}