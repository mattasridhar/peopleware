package com.peopleware.recruitingApp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.peopleware.recruitingApp.models.UserModel;
import com.peopleware.recruitingApp.models.UserRowMapper;

@Transactional
@Repository
public class UserDAO implements IUserDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	//returns the list of all users
	@Override
	public List<UserModel> getAllUsers() {
		String sql = "SELECT * FROM users";
		RowMapper<UserModel> rowMapper = new UserRowMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}

	//to add a new user into users table
	@Override
	public void addUser(UserModel user) {
		// Add user
		String sql = "INSERT INTO users (id, actualname, username, password, role) values (?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, user.getId(), user.getActualname(), user.getUsername(), user.getPassword(),
				user.getRole());

		// Return User id
		sql = "SELECT id FROM users WHERE username = ? and password=?";
		int userId = jdbcTemplate.queryForObject(sql, Integer.class, user.getUsername(), user.getPassword());

		// Set user id
		user.setId(userId);
	}

	//to check if user present of not
	@Override
	public boolean userExists(String username, String password) {
		String sql = "SELECT count(*) FROM users WHERE username = ? and password=?";
		int count = jdbcTemplate.queryForObject(sql, Integer.class, username, password);
		if (count == 0) {
			return false;
		} else {
			return true;
		}
	}

	//returns the last user id
	@Override
	public int getLastId() {
		String sql = "SELECT MAX(id) FROM users";
		int count = jdbcTemplate.queryForObject(sql, Integer.class);
		return count;

	}

	//returns the user info based on User id
	@Override
	public UserModel getUserById(String userId) {
		String sql = "SELECT actualname, username, password, role FROM users WHERE username = ?";
		RowMapper<UserModel> rowMapper = new BeanPropertyRowMapper<UserModel>(UserModel.class);
		UserModel user = jdbcTemplate.queryForObject(sql, rowMapper, userId);
		if (user.getPassword() != null)
			return user;
		else
			return null;
	}

}
