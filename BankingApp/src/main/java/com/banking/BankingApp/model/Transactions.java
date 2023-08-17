package com.banking.BankingApp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;

@Entity
public class Transactions{
	
	


@Id
@GeneratedValue
private int referenceno;
private String timestamp;
private long accountfrom;
private long accountto;

private String transType;


@JsonBackReference
@ManyToOne
@JoinColumn(name="accountno")

private accounts acc_no;

private double amount;
private String status;
public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public int getReferenceno() {
	return referenceno;
}

public void setReferenceno(int referenceno) {
	this.referenceno = referenceno;
}

public String getTimestamp() {
	return timestamp;
}

public void setTimestamp(String timestamp) {
	this.timestamp = timestamp;
}

public long getAccountfrom() {
	return accountfrom;
}

public void setAccountfrom(long accountfrom) {
	this.accountfrom = accountfrom;
}

public long getAccountto() {
	return accountto;
}

public void setAccountto(long accountto) {
	this.accountto = accountto;
}

public String getTransType() {
	return transType;
}

public void setTransType(String transType) {
	this.transType = transType;
}

public accounts getAcc_no() {
	return acc_no;
}

public void setAcc_no(accounts acc_no) {
	this.acc_no = acc_no;
}

public double getAmount() {
	return amount;
}

public void setAmount(double amount) {
	this.amount = amount;
}


}