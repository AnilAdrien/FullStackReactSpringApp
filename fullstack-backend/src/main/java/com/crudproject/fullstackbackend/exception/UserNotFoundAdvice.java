package com.crudproject.fullstackbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/*@ControllerAdvice is a specialization of the @Component annotation which allows 
 * to handle exceptions across the whole application in one global handling component. 
 * It can be viewed as an interceptor 
 * of exceptions thrown by methods annotated with @RequestMapping and similar.*/

import java.util.*;

@ControllerAdvice
public class UserNotFoundAdvice {
	
	//The code bellow will handle the exception
	@ResponseBody
	@ExceptionHandler(UserNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String> exceptionHandler(UserNotFoundException exception){
		
		Map<String, String> errorMap=new HashMap<>();
		errorMap.put("errorMessage", exception.getMessage());
		return errorMap;
	}

}
