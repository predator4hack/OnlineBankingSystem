package com.bank.Banking;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.Customer;
import com.bank.Banking.service.CustomerService;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@RunWith(SpringRunner.class)
@WebMvcTest

public class CustomertControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	
	
	
	
	@MockBean 
	private CustomerService custService;
	
	
	@MockBean
	private CustomerRepository custRepository;
	
	ObjectMapper mapper = new ObjectMapper().findAndRegisterModules()
			.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
			
//			
//			@Test
//			
//			public void testFetchAllUsers() throws Exception{
//		
//		Users cust = new Users();
//		List<accounts> accountList = new ArrayList<>();
//		accounts account = new accounts();
//		accountList.add(account);
//		
//		
//		
//		
//		cust.setUserid("kt");
//		cust.setPassword("kt123123");
//		cust.setAadhaarno("111122223333");
//		cust.setEmail("123@gmail.com");
//		cust.setPhoneno(1111111111);
//		cust.setName("kamal");

//		List<Users> custList = new ArrayList<>();
//		custList.add(cust);
//		
//		
//		Mockito.when(custService.fetchAllUsees()).thenReturn(custList);
//		System.out.println("test method");
//		
//		mvc.perform(get("/apicusts/fetchAllUsers").contentType)(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//.andExpect(jsonPath("$",Matchers.hasSize(2)))
//.andExpect(jsonPath("$[0].custid",))MAtchees.equalTo(cust.getUserid()));
//
//
//
//	}
	
	
	@Test
	
	public void testSaveUser() throws Exception
	{
		Customer cust = new Customer();
		
		List<Account> accountList = new ArrayList<>();
		
		Account account = new Account();
		
		accountList.add(account);
		
		cust.setUserId("kt");
		cust.setPassword("kt123123");
		cust.setAadhar("111122223333");
		cust.setEmail("123@gmail.com");
		cust.setName("kamal");
		cust.setMobile(1111118888);
		cust.setDob("2001-11-11");
		
		cust.setFathername("Rameshbhai");
		cust.setMothername("Sushilaben");
		cust.setCurrentAddress("Morbi");
		cust.setPermanentAddress("Gujarat");
	cust.setAccount(accountList);
	
	
	Mockito.when(custService.saveCustomer(ArgumentMatchers.any()))
	.thenReturn(cust.toString())	;
	
	String json = mapper.writeValueAsString(cust);
	mvc.perform(post("/saveCustomer").
			contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
			.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
			



			}
	
	
}
