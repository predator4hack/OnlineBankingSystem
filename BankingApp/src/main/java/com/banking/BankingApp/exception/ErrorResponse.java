package com.banking.BankingApp.exception;

public class ErrorResponse {
	
	private int statusCode;
	private String message;
	
	
	public ErrorResponse(String message) {
		super();
		this.message=message;
		
	}
	
	public ErrorResponse(int statusCode, String message) {
		this.statusCode=statusCode;
		this.message=message;
		
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	

}
