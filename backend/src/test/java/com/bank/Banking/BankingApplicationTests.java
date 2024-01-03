package com.bank.Banking;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import java.util.ArrayList;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import com.bank.Banking.dao.AccRepository;
import com.bank.Banking.dao.AdminRepository;
import com.bank.Banking.dao.CustomerRepository;
import com.bank.Banking.dao.TransactionRepository;
import com.bank.Banking.model.Account;
import com.bank.Banking.model.AccountStatement;
import com.bank.Banking.model.Admin;
import com.bank.Banking.model.Customer;
import com.bank.Banking.model.JwtResponse;
import com.bank.Banking.model.LoginModel;
import com.bank.Banking.model.Transaction;
import com.bank.Banking.security.JwtUtils;
import com.bank.Banking.service.AccountService;
import com.bank.Banking.service.AdminService;
import com.bank.Banking.service.CustomerService;
import com.bank.Banking.service.TransactionService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;


@ComponentScan(basePackages="com")
//@SpringBootTest//(classes= { com.bank.Banking.AdminControllerTest.class})//, com.bank.Banking.UserControllerTest.class})
//@SpringBootTest(classes=com.bank.Banking.UserControllerTest.class)

//
//@RunWith(SpringRunner.class)
//@WebMvcTest

@SpringBootTest//(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class BankingApplicationTests {

	@Test
	void contextLoads() {
	}
	
	
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private CustomerService custService;
	
	@MockBean 
	private CustomerRepository custRepository;
	
	@MockBean
	private AdminRepository adRepository;
	
	@MockBean
	private AdminService adService;
	
	
	@MockBean
	private TransactionRepository transRepository;
	
	@MockBean
	private TransactionService transService;
	
	
	@MockBean
	private AccRepository accRepository;
	
	@MockBean
	private AccountService accService;
	
	@MockBean
	private JwtUtils jwtUtils;
	
	private static ObjectMapper mapper = new ObjectMapper();
		//	.findAndRegisterModules()
		//	.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
	
	
/*******Customer Tests*******/
	
//	@Test
//	public void testSaveUser() throws Exception {
//		Customer customer = new Customer();
////		
//	
//		customer.setAadhar("111111111111");
//		customer.setDob("2001-11-11");
//		customer.setEmail("kt@gmail.com");
//		customer.setMobile(1234567891);
//		customer.setName("kt");
//		customer.setPassword("12345678");
//		customer.setUserId("kt");
//		
//	//		
//		String jwt = jwtUtils.generateJwtTokenUser(customer.getUserId());
//		ResponseEntity<JwtResponse> sucessResponse = ResponseEntity.ok(new JwtResponse(jwt, customer.getUserId()));
//		 Mockito.when(custService.saveCustomer(ArgumentMatchers.any(Customer.class))).
//		 thenReturn(sucessResponse);
//		 
//		 String json = mapper.writeValueAsString(customer );
//		 mvc.perform(post("/saveCustomer").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//
//		
//		
//	}
	
//	
//	@Test
//	
//	public void testLogin() throws Exception {
//		
//		LoginModel cust = new LoginModel();
//		
//		cust.setUserId("kt");
//		cust.setPassword("kt@123");
//		
//		 
//	
//
//		 Mockito.when(custService.validateCustomer(ArgumentMatchers.any()).getBody().toString()).
//		 thenReturn(cust.toString());
//		
//		 
//		 
//		 String json = mapper.writeValueAsString(cust);
//		 mvc.perform(post("/login").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//	}
//	
//	
//	@Test
//	public void testfetchUser() throws Exception
//	{
//		
//		Customer cust = new Customer();
//		
//		
//	Mockito.when(custService.fetchUser("ktadmin")).thenReturn(cust);
//	mvc.perform(get("/fetchUser/ktadmin").contentType
//	(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//.andExpect(jsonPath("$.userId",Matchers.equalTo(cust.getUserId())))
//.andExpect(jsonPath("$.name",Matchers.equalTo(cust.getName())))
//.andExpect(jsonPath("$.password",Matchers.equalTo(cust.getPassword())))
//.andExpect(jsonPath("$.email",Matchers.equalTo(cust.getEmail())))
//.andExpect(jsonPath("$.mobile",Matchers.equalTo((int)cust.getMobile())))
//.andExpect(jsonPath("$.aadhar",Matchers.equalTo(cust.getAadhar())))
//.andExpect(jsonPath("$.dob",Matchers.equalTo(cust.getDob())));
//	
//	}
//	
//	@Test
//	public void testfetchAccounts() throws Exception
//	{
//		
//		
//		Account account = new Account();
//		List<Account> accList = new ArrayList<>();
//		accList.add(account);
//		
//	Mockito.when(custService.fetchAccounts("ktadmin")).thenReturn(accList);
//	mvc.perform(get("/fetchAccounts/ktadmin").contentType
//	(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//	.andExpect(jsonPath("$",Matchers.hasSize(1)))
//	.andExpect(jsonPath("$[0].accno",Matchers.equalTo((int)accList.get(0).getAccno())))
//	.andExpect(jsonPath("$[0].acctype",Matchers.equalTo(accList.get(0).getAcctype())))
//	.andExpect(jsonPath("$[0].balance",Matchers.equalTo(accList.get(0).getBalance())))
//	.andExpect(jsonPath("$[0].branch",Matchers.equalTo(accList.get(0).getBranch())))
//	.andExpect(jsonPath("$[0].ifsc",Matchers.equalTo(accList.get(0).getIfsc())))
//	.andExpect(jsonPath("$[0].openingDate",Matchers.equalTo(accList.get(0).getOpeningDate())))
//	.andExpect(jsonPath("$[0].disabled",Matchers.equalTo(accList.get(0).isDisabled())));
//		
//	
//	
//	}
//	
//	
//	
//	
//	/*******Admin Tests*******/
//	
//	@Test
//	public void testfetchAllCustomers() throws Exception
//	{
//		Customer cust = new Customer();
//	
//		List<Customer> custList = new ArrayList<>();
//		Admin  adm = new Admin();
//		custList.add(cust);
//		
//	Mockito.when(adService.getCustomers("ktadmin")).thenReturn(custList);
//	mvc.perform(get("/getAllCustomers/ktadmin").contentType
//	(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//	.andExpect(jsonPath("$",Matchers.hasSize(1)))
//	.andExpect(jsonPath("$[0].userId",Matchers.equalTo(custList.get(0).getUserId())))
//	.andExpect(jsonPath("$[0].name",Matchers.equalTo(custList.get(0).getName())))
//	.andExpect(jsonPath("$[0].password",Matchers.equalTo(custList.get(0).getPassword())))
//	.andExpect(jsonPath("$[0].email",Matchers.equalTo(custList.get(0).getEmail())))
//	.andExpect(jsonPath("$[0].mobile",Matchers.equalTo((int)custList.get(0).getMobile())))
//	.andExpect(jsonPath("$[0].aadhar",Matchers.equalTo(custList.get(0).getAadhar())))
//	.andExpect(jsonPath("$[0].dob",Matchers.equalTo(custList.get(0).getDob())));
//		
//	}
//	
//	@Test
//	public void testfetchAllAccounts() throws Exception
//	{
//		Account account = new Account();
//	
//		List<Account> accList = new ArrayList<>();
//		Admin  adm = new Admin();
//		accList.add(account);
//		
//	Mockito.when(adService.getAccounts("ktadmin")).thenReturn(accList);
//	mvc.perform(get("/getAllAccounts/ktadmin").contentType
//	(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//	.andExpect(jsonPath("$",Matchers.hasSize(1)))
//	.andExpect(jsonPath("$[0].accno",Matchers.equalTo((int)accList.get(0).getAccno())))
//	.andExpect(jsonPath("$[0].acctype",Matchers.equalTo(accList.get(0).getAcctype())))
//	.andExpect(jsonPath("$[0].balance",Matchers.equalTo(accList.get(0).getBalance())))
//	.andExpect(jsonPath("$[0].branch",Matchers.equalTo(accList.get(0).getBranch())))
//	.andExpect(jsonPath("$[0].ifsc",Matchers.equalTo(accList.get(0).getIfsc())))
//	.andExpect(jsonPath("$[0].openingDate",Matchers.equalTo(accList.get(0).getOpeningDate())))
//	.andExpect(jsonPath("$[0].disabled",Matchers.equalTo(accList.get(0).isDisabled())));
//	
//		
//	}
//		
//	
//	@Test
//	public void testfetchAllTransactions() throws Exception
//	{
//		Transaction transaction = new Transaction();
//	
//		List<Transaction> transList = new ArrayList<>();
//		Admin  adm = new Admin();
//		transList.add(transaction);
//		
//	Mockito.when(adService.getTransactions("ktadmin")).thenReturn(transList);
//	mvc.perform(get("/getAllTransactions/ktadmin").contentType
//	(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//	.andExpect(jsonPath("$",Matchers.hasSize(1)))
//	.andExpect(jsonPath("$[0].transactionId",Matchers.equalTo((int)transList.get(0).getTransactionId())))
//	.andExpect(jsonPath("$[0].transType",Matchers.equalTo(transList.get(0).getTransType())))
//	.andExpect(jsonPath("$[0].amount",Matchers.equalTo(transList.get(0).getAmount())))
//	.andExpect(jsonPath("$[0].accTo",Matchers.equalTo((int)transList.get(0).getAccTo())))
//	.andExpect(jsonPath("$[0].accFrom",Matchers.equalTo((int)transList.get(0).getAccFrom())))
//	.andExpect(jsonPath("$[0].timestamp",Matchers.equalTo(transList.get(0).getTimestamp())))
//	.andExpect(jsonPath("$[0].status",Matchers.equalTo(transList.get(0).getStatus())));
//	}
//		
//
//	@Test
//	public void testSaveAdmin() throws Exception {
//		Admin adm = new Admin();
//
//	
//		adm.setUserid("ktkt");
//		adm.setPassword("ktktktktkt");
//	
//		 Mockito.when(adService.saveAdmin(ArgumentMatchers.any()).getBody().toString()).
//		 thenReturn(adm.toString());
//		 
//		 String json = mapper.writeValueAsString(adm );
//		 mvc.perform(post("/saveAdmin").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//	
//	
//	}
//	
//
//	@Test
//	public void testfetchAdmin() throws Exception
//	{
//		
//		Admin  adm = new Admin();
//		
//		
//	Mockito.when(adService.fetchAdmin("ktadmin")).thenReturn(adm);
//	mvc.perform(get("/fetchAdmin/ktadmin").contentType
//	(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//	.andExpect(jsonPath("$.userid",Matchers.equalTo(adm.getUserid())))
//	.andExpect(jsonPath("$.password",Matchers.equalTo(adm.getPassword())));
//	
//	}
//	
//	
//	
//	
//	@Test
//	public void testAdminLogin() throws Exception {
//		Admin adm = new Admin();
//
//	
//		adm.setUserid("ktkt");
//		adm.setPassword("ktktktktkt");
//	
//		 Mockito.when(adService.adminLogin(ArgumentMatchers.any()).getBody().toString()).
//		 thenReturn(adm.toString());
//		 
//		 String json = mapper.writeValueAsString(adm );
//		 mvc.perform(post("/adminLogin").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//		
//	
//	}
//	
//	@Test
//	public void testToggleDisable() throws Exception {
//		Admin adm = new Admin();
//
//		adm.setUserid("ktkt");
//		adm.setPassword("ktktktktkt");
//	
//		 Mockito.when(adService.adminLogin(ArgumentMatchers.any()).getBody().toString()).
//		 thenReturn(adm.toString());
//		 
//		 String json = mapper.writeValueAsString(adm );
//		 mvc.perform(post("/adminLogin").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//			
//	}
//	
//
//	/*******Transaction Tests*******/	
//	@Test
//	public void testTransact() throws Exception {
//		
//		Transaction trans = new Transaction();
//
//	
//		trans.setAccFrom(123456789);
//		trans.setAccTo(127545423);
//		trans.setAmount(10000);
//		trans.setStatus("SUCCESS");
//		trans.setTimestamp("2023.08.24.09.40.20");
//		trans.setTransType("RTGS");
//	
//		 Mockito.when(transService.transact(ArgumentMatchers.any())).
//		 thenReturn(trans);
//		 
//		 String json = mapper.writeValueAsString(trans );
//		 mvc.perform(post("/transact").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//	
//	}
//	
//	/*******Account Tests*******/
//	
//	@Test
//	public void testCreateAccount() throws Exception {
//		
//		Account account = new Account();
//	
//		account.setAccno(123456789);
//		account.setAcctype("Savings");
//		account.setBalance(200000);
//		account.setBranch("Delhi");
//		account.setOpeningDate("25 Aug 2023");
//		account.setIfsc("DEL1010");
//		account.setDisabled(false);
//	
//		 Mockito.when(accService.createAccount(ArgumentMatchers.any(),ArgumentMatchers.any())).
//		 thenReturn(account);
//		 
//		 String json = mapper.writeValueAsString(account );
//		 mvc.perform(post("/createAccount/kamal").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
////		
//	
//	}
//	
//	
//
//	@Test
//	public void testGetAccountDetails() throws Exception
//	{
//		Account acc = new Account();
//		
//		Mockito.when(accService.getAccountDetails(12345678)).thenReturn(acc);
//		mvc.perform(get("/getAccountDetails/12345678").contentType
//		(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//		
//	.andExpect(jsonPath("$.accno",Matchers.equalTo((int)acc.getAccno())))
//	.andExpect(jsonPath("$.acctype",Matchers.equalTo(acc.getAcctype())))
//	.andExpect(jsonPath("$.balance",Matchers.equalTo(acc.getBalance())))
//	.andExpect(jsonPath("$.branch",Matchers.equalTo(acc.getBranch())))
//	.andExpect(jsonPath("$.ifsc",Matchers.equalTo(acc.getIfsc())))
//	.andExpect(jsonPath("$.openingDate",Matchers.equalTo(acc.getOpeningDate())))
//	.andExpect(jsonPath("$.disabled",Matchers.equalTo(acc.isDisabled())))
//;
//	}
//	
//	
//	@Test
//	public void testFetchTransactions() throws Exception
//	{
//		
//		Transaction transaction = new Transaction();
//		List<Transaction> transList = new ArrayList<>();
//	
//		transList.add(transaction);
//		
//	Mockito.when(accService.fetchTransactions(11111111)).thenReturn(transList);
//	mvc.perform(get("/fetchTransactions/11111111").contentType
//	(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//	.andExpect(jsonPath("$",Matchers.hasSize(1)))
//	.andExpect(jsonPath("$[0].transactionId",Matchers.equalTo((int)transList.get(0).getTransactionId())))
//		.andExpect(jsonPath("$[0].transType",Matchers.equalTo(transList.get(0).getTransType())))
//		.andExpect(jsonPath("$[0].amount",Matchers.equalTo(transList.get(0).getAmount())))
//		.andExpect(jsonPath("$[0].accTo",Matchers.equalTo((int)transList.get(0).getAccTo())))
//		.andExpect(jsonPath("$[0].accFrom",Matchers.equalTo((int)transList.get(0).getAccFrom())))
//		.andExpect(jsonPath("$[0].timestamp",Matchers.equalTo(transList.get(0).getTimestamp())))
//		.andExpect(jsonPath("$[0].status",Matchers.equalTo(transList.get(0).getStatus())));
//		
//	}
	
	
//	@Test
//	public void testAccountStatement() throws Exception {
//		
//		Account account = new Account();
//		
//		Transaction transaction = new Transaction();
//		
//		List<Transaction> transList = new ArrayList<>();
//		
//		transList.add(transaction);
//		account.setTransaction(transList);
//		
//		AccountStatement accStat = new AccountStatement();
//		accStat.setStartDate("2023-08-24");
//		accStat.setEndDate("2023-08-26");
//	
//		
//		Mockito.when(accService.accountStatement(account.getAccno(), accStat)).
//		 thenReturn(transList);
//	 
//	 String json = mapper.writeValueAsString(accStat);
//		 mvc.perform(post("/accountStatement/1234567").
//				 contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
//				 .content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());		
//	
//	}
	

}
