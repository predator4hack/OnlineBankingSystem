package com.bank.Banking.model;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String userId;
	  
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public JwtResponse(String token, String userId) {
		super();
		this.token = token;
		this.userId = userId;
	}
	 
}
