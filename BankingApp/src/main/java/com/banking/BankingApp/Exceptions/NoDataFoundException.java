package com.banking.BankingApp.Exceptions;

public class NoDataFoundException extends Exception {

		private String message;
		
		public NoDataFoundException(String message)
		{
			super(message);
		}
}
