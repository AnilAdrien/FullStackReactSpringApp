package com.crudproject.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.crudproject.fullstackbackend.exception.UserNotFoundException;
import com.crudproject.fullstackbackend.model.User;
import com.crudproject.fullstackbackend.repository.UserRepository;
import java.util.*;

@RestController
@CrossOrigin("http://localhost:3000") //Link the backend to Front-End
public class UserController {
	
	//Autowired will be used for injection
	@Autowired
	private UserRepository userRepository;
	
	//Posting the data
	@PostMapping("/user")
	User newUser(@RequestBody User newUser)
	{
		return userRepository.save(newUser);
	}
	
	//Get List of users
	@GetMapping("/users")
	List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	//Get the user by its id
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) {
		//Get element by its id or else give an exception telling the user is not found
		return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
	}
	
	
	//Edit the user information by using PUT
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User newUser, @PathVariable Long id) {
		return userRepository.findById(id).map(user -> {
					user.setUsername(newUser.getUsername());
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					return userRepository.save(user);
				}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	//Delete the element with id
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) {
		//Checking if the id exists or not
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userRepository.deleteById(id);
		return "User with id "+id+" has been deleted successfully.";
	}
	

}
