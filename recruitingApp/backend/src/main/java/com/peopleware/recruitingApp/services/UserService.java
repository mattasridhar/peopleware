package com.peopleware.recruitingApp.services;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peopleware.recruitingApp.dao.IUserDAO;
import com.peopleware.recruitingApp.models.UserModel;

@Service
public class UserService implements IUserService {

	@Autowired
	private IUserDAO userDAO;

	//returns the list of all users
	@Override
	public List<UserModel> getAllUsersService() {
		return userDAO.getAllUsers();
	}

	//inserts a new user entry in users table
	@Override
	public synchronized boolean addNewUser(UserModel newUser) {
		if (userDAO.userExists(newUser.getUsername(), newUser.getPassword())) {
			return false;
		} else {
			userDAO.addUser(newUser);
			return true;
		}
	}

	//returns the user info based on userId
	@Override
	public UserModel getUserById(String userId) {
		UserModel obj = userDAO.getUserById(userId);
		if(obj.getPassword() != null)
			return obj;
		else
			return null;
	}

}
