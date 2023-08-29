package com.bank.Banking.exceptions;

public class NoDataFoundException extends Exception {

		private String message;
		
		public NoDataFoundException(String message)
		{
			super(message);
		}
}
