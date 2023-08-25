package com.bank.Banking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.Banking.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {

}
