package com.peopleware.recruitingApp.dao;

import java.util.List;

import com.peopleware.recruitingApp.models.UserModel;

public interface IUserDAO {
	List<UserModel> getAllUsers();

	void addUser(UserModel user);

	boolean userExists(String username, String password);

	int getLastId();

	UserModel getUserById(String userId);

}
