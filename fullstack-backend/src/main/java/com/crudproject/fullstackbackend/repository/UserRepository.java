package com.crudproject.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudproject.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
	
	

}
