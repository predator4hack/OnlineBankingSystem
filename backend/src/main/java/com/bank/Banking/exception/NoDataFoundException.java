package com.bank.Banking.exception;

public class NoDataFoundException extends Exception {
	
	private String message;
	
	
	public NoDataFoundException(String message) {
		super(message);
	}

}
