package com.banking.BankingApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banking.BankingApp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
