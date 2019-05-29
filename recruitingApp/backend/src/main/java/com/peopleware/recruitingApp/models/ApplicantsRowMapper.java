package com.peopleware.recruitingApp.models;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class ApplicantsRowMapper implements RowMapper<ApplicantsModel> {

	@Override
	public ApplicantsModel mapRow(ResultSet row, int rowNum) throws SQLException {
		ApplicantsModel appl = new ApplicantsModel();
		appl.setId(row.getInt("id"));
		appl.setFullname(row.getString("fullname"));
		appl.setEmail(row.getString("email"));
		appl.setContact(row.getString("contact"));
		appl.setSalary(row.getInt("salary"));
		appl.setJobid(row.getInt("jobid"));

		return appl;
	}

}
