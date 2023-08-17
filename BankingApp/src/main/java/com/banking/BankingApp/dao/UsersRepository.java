package com.banking.BankingApp.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banking.BankingApp.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users,String> {

//	Users findByUsername(String username);
}
