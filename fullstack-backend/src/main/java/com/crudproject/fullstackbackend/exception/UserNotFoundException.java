package com.crudproject.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{
	
	//Creation of a constructor for the exception
	public UserNotFoundException(Long id) {
		super("Could not find the user with the id " + id);
	}
}
