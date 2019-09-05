package com.peopleware.recruitingApp.models;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class JobsRowMapper implements RowMapper<JobsModel> {

	@Override
	public JobsModel mapRow(ResultSet row, int rowNum) throws SQLException {
		JobsModel jobs = new JobsModel();
		jobs.setId(row.getInt("id"));
		jobs.setCompanyname(row.getString("companyname"));
		jobs.setJobname(row.getString("jobname"));
		jobs.setDescription(row.getString("description"));
		jobs.setSalary(row.getInt("salary"));
		jobs.setType(row.getString("type"));

		return jobs;
	}

}