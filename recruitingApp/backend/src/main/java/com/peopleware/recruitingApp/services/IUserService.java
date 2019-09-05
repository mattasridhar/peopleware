package com.peopleware.recruitingApp.services;

import java.util.List;

import com.peopleware.recruitingApp.models.UserModel;

public interface IUserService {
	List<UserModel> getAllUsersService();

	boolean addNewUser(UserModel newUser);

	UserModel getUserById(String userId);

}