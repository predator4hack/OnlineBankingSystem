package com.bank.Banking.model;
import jakarta.persistence.*;

@Entity
public class Transaction {
	@Id
	@GeneratedValue
	private long transactionId;
	private String transType;
	private double amount;
	
	private long accFrom;
	private long accTo;
	private String timestamp;
	private String status;
	
	@ManyToOne
	@JoinColumn(name="accno")
	private Account acc_no;
	
	public String getTransType() {
		return transType;
	}
	public void setTransType(String transType) {
		this.transType = transType;
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