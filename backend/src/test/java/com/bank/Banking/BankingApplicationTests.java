package com.bank.Banking;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;



@ComponentScan(basePackages="com")
@SpringBootTest(classes=com.bank.Banking.CustomertControllerTest.class)
class BankingApplicationTests {

	@Test
	void contextLoads() {
	}

}
