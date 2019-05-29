package com.peopleware.recruitingApp.models;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class UserRowMapper implements RowMapper<UserModel> {
	@Override
	public UserModel mapRow(ResultSet row, int rowNum) throws SQLException {
		UserModel user = new UserModel();
		user.setId(row.getInt("id"));
		user.setActualname(row.getString("actualname"));
		user.setUsername(row.getString("username"));
		user.setPassword(row.getString("password"));
		user.setRole(row.getString("role"));
		return user;
	}

}