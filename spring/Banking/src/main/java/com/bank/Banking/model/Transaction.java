package com.bank.Banking.model;
import jakarta.persistence.*;

@Entity
public class Transaction {
	@Id
	private long transactionId;
	private double amount;
	private long accFrom;
	private long accTo;
	private String timestamp;
	public long getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(long transactionId) {
		this.transactionId = transactionId;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public long getAccFrom() {
		return accFrom;
	}
	public void setAccFrom(long accFrom) {
		this.accFrom = accFrom;
	}
	public long getAccTo() {
		return accTo;
	}
	public void setAccTo(long accTo) {
		this.accTo = accTo;
	}
	public String getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}
}