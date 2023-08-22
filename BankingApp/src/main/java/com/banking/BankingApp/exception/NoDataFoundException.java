package com.banking.BankingApp.exception;

public class NoDataFoundException extends Exception {
	
	private String message;
	
	
	public NoDataFoundException(String message) {
		super(message);
	}

}
