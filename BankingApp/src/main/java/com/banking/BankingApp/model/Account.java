package com.banking.BankingApp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;

import java.lang.String;
import java.util.List;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;

@Entity
public class Account {
	@Id
	
	private long accountno;

	//@Column(name="acc_type")
	private String accounttype;
	private double balance;
	

	@ManyToOne
	@JoinColumn(name="userid")
	private User user;
	
	@OneToMany(mappedBy="acc_no", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private List<Transaction> transaction;

	public long getAccountno() {
		return accountno;
	}

	public void setAccountno(long accountno) {
		this.accountno = accountno;
	}

	public String getAccounttype() {
		return accounttype;
	}

	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Transaction> getTransaction() {
		return transaction;
	}

	public void setTransaction(List<Transaction> transaction) {
		this.transaction = transaction;
	}
	
	

	
	
	
	
}