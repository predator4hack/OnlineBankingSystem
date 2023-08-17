package com.banking.BankingApp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import java.lang.String;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Column;

@Entity
public class Transaction {
	@Id
	@GeneratedValue
	private int referenceno;
	private String timestamp;
	
	private long accountfrom;
	private long accountto; 
	
	private double amount;
	
	private String transtype;
	
	private String status;
	
	@JsonBackReference
	
	@ManyToOne
	@JoinColumn(name="accountno")
	private Account acc_no;

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

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getTranstype() {
		return transtype;
	}

	public void setTranstype(String transtype) {
		this.transtype = transtype;
	}

	public Account getAcc_no() {
		return acc_no;
	}

	public void setAcc_no(Account acc_no) {
		this.acc_no = acc_no;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	
	
	
}