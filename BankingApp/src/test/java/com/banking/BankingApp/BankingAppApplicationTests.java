package com.banking.BankingApp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan(basePackages="com")
@SpringBootTest(classes=com.banking.BankingApp.UserControllerTest.class)

class BankingAppApplicationTests {

	@Test
	void contextLoads() {
	}

}
