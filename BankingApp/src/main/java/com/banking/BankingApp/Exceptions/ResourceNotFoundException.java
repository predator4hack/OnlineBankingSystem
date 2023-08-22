package com.banking.BankingApp.Exceptions;



//@ResponseStatus(value=Ht/tpStatus.NOT_FOUND,reason = "Invalid Employee Id")
public class ResourceNotFoundException extends Exception {

	
		private static final long serialVersionUID=1L;
		
		public ResourceNotFoundException(String message) {
			super(message);
		}
}
