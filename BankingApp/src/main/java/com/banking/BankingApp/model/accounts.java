package com.banking.BankingApp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.lang.String;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;

@Entity
public class accounts{
	
	
@Id

private long accountno;




//@Column(name="Account_type")
private String accountType;
//@Column(name = "balance")
private double accountBalance;

@ManyToOne
@JoinColumn(name="userid")
@JsonBackReference
private Users user;

@OneToMany(mappedBy="acc_no",fetch=FetchType.EAGER,cascade=CascadeType.ALL)
private List<Transactions> transaction;

public long getAccountno() {
	return accountno;
}

public void setAccountno(long accountno) {
	this.accountno = accountno;
}

public String getAccountType() {
	return accountType;
}

public void setAccountType(String accountType) {
	this.accountType = accountType;
}

public double getAccountBalance() {
	return accountBalance;
}

public void setAccountBalance(double accountBalance) {
	this.accountBalance = accountBalance;
}

public Users getUser() {
	return user;
}

public void setUser(Users user) {
	this.user = user;
}

public List<Transactions> getTransaction() {
	return transaction;
}

public void setTransaction(List<Transactions> transaction) {
	this.transaction = transaction;
}



}