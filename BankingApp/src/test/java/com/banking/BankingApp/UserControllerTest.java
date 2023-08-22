package com.banking.BankingApp;



import java.util.ArrayList;
import java.util.List;

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

import com.banking.BankingApp.dao.UserRepository;
import com.banking.BankingApp.model.Account;
import com.banking.BankingApp.model.User;
import com.banking.BankingApp.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest
public class UserControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private UserService userService;
	
	@MockBean 
	private UserRepository userRepository;
	
	ObjectMapper mapper = new ObjectMapper()
			.findAndRegisterModules()
			.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
	
	@Test
	public void testSaveUser() throws Exception {
		User user = new User();
		List<Account> accountList=new ArrayList<>();
		Account account = new Account();
		accountList.add(account);
		
		 user.setUserid("sai"); 
		 user.setPassword("sai@1234"); //
		 user.setEmail("sai@gmail.com"); // 
		 user.setAadharno("121212121212"); //
		 user.setName("sai"); // 
		 user.setAccount(accountList); //
		 user.setPhoneno(1111111111);
		 
		 
		 Mockito.when(userService.saveUser(ArgumentMatchers.any())).
		 thenReturn(user);
		 
		 String json = mapper.writeValueAsString(user);
		 mvc.perform(post("/saveUser").
				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//				 .andReturn();
//		 
//		 String result = requestResult.getResponse().getContentAsString();
//		 assertEquals(result, "User inserted");
		 
		
		
		
	}
	
//	@Test
//	public void testFetchAllUsers() throws Exception {
//		User user = new User();
//		
//		List<Account> accountList=new ArrayList<>();
//		
//		Account account=new Account();
//		accountList.add(account);
//		
//		user.setUserid("sai");
//		user.setPassword("sai@123");
//		user.setEmail("sai@gmail.com");
//		user.setAadharno("121212121212");
//		user.setName("sai");
//		user.setAccount(accountList);
//		user.setPhoneno(1111111111);
//		
//		List<User> userList = new ArrayList<>();
//		userList.add(user);
//		
//		Mockito.when(userService.fetchAllUsers()).thenReturn(userList);
//		
//		System.out.println("test method");
//		mvc.perform(get("/api/users/fetchAllUsers").contentType
//			(MediaType.APPLICATION_JSON)).andExpect((status().isOk())
//					.andExpect(jsonPath("$")))
//				
//				
//		
//		
//		
//		
//		
//	}
	
	

}
