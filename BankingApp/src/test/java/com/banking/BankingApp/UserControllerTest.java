package com.banking.BankingApp;

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

import com.banking.BankingApp.dao.UsersRepository;
import com.banking.BankingApp.model.Users;
import com.banking.BankingApp.model.accounts;
import com.banking.BankingApp.services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@RunWith(SpringRunner.class)
@WebMvcTest

public class UserControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	
	
	
	
	@MockBean 
	private UserService userService;
	
	
	@MockBean
	private UsersRepository userRepository;
	
	ObjectMapper mapper = new ObjectMapper().findAndRegisterModules()
			.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
			
//			
//			@Test
//			
//			public void testFetchAllUsers() throws Exception{
//		
//		Users user = new Users();
//		List<accounts> accountList = new ArrayList<>();
//		accounts account = new accounts();
//		accountList.add(account);
//		
//		
//		
//		
//		user.setUserid("kt");
//		user.setPassword("kt123123");
//		user.setAadhaarno("111122223333");
//		user.setEmail("123@gmail.com");
//		user.setPhoneno(1111111111);
//		user.setName("kamal");

//		List<Users> userList = new ArrayList<>();
//		userList.add(user);
//		
//		
//		Mockito.when(userService.fetchAllUsees()).thenReturn(userList);
//		System.out.println("test method");
//		
//		mvc.perform(get("/apiusers/fetchAllUsers").contentType)(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//.andExpect(jsonPath("$",Matchers.hasSize(2)))
//.andExpect(jsonPath("$[0].userid",))MAtchees.equalTo(user.getUserid()));
//
//
//
//	}
	
	
	@Test
	
	public void testSaveUser() throws Exception
	{
		Users user = new Users();
		
		List<accounts> accountList = new ArrayList<>();
		
		accounts account = new accounts();
		
		accountList.add(account);
		
		user.setUserid("kt");
		user.setPassword("kt123123");
		user.setAadhaarno("111122223333");
		user.setEmail("123@gmail.com");
		user.setName("kamal");
		user.setPhoneno(1111118888);
		
	user.setAccount(accountList);
	
	
	Mockito.when(userService.saveUsers(ArgumentMatchers.any()))
	.thenReturn(user);
	
	String json = mapper.writeValueAsString(user);
	mvc.perform(post("/saveUsers").
			contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
			.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
			



			}
	
	
}
