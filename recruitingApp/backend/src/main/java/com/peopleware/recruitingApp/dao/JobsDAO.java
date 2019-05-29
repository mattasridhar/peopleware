package com.peopleware.recruitingApp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.peopleware.recruitingApp.models.JobsModel;
import com.peopleware.recruitingApp.models.JobsRowMapper;
import com.peopleware.recruitingApp.models.RequirementModel;
import com.peopleware.recruitingApp.models.RequirementRowMapper;

@Transactional
@Repository
public class JobsDAO implements IJobsDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	// for Handling Job actions
	@Override
	public int addJob(JobsModel job) {
		// Insert job
		String sql = "INSERT INTO jobs (id, companyname, jobname, description, salary, type) values (?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, job.getId(), job.getCompanyname().toUpperCase(), job.getJobname(),
				job.getDescription(), job.getSalary(), job.getType());

		// Get job id
		sql = "SELECT count(*) FROM jobs WHERE companyname = ? and jobname=?";
		int count = jdbcTemplate.queryForObject(sql, Integer.class, job.getCompanyname(), job.getJobname());
		if (count == 1) {
			sql = "SELECT id FROM jobs WHERE companyname = ? and jobname=?";
			int jobId = jdbcTemplate.queryForObject(sql, Integer.class, job.getCompanyname(), job.getJobname());

			// Set job id
			job.setId(jobId);

			return jobId;
		} else {
			return -1;
		}

	}

	//return the list of all avaialble jobs
	@Override
	public List<JobsModel> getAllJobs() {
		String sql = "SELECT * FROM jobs";
		RowMapper<JobsModel> rowMapper = new JobsRowMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}

	//return list of job using jobid present in jobs table
	@Override
	public JobsModel getJobById(int jobId) {
		String sql = "SELECT companyname, jobname, description, salary, type FROM jobs WHERE id=?";
		RowMapper<JobsModel> rowMapper = new BeanPropertyRowMapper<JobsModel>(JobsModel.class);
		JobsModel job = jdbcTemplate.queryForObject(sql, rowMapper, jobId);
		if (job.getJobname() != null)
			return job;
		else
			return null;
	}

	//returns the list of jobs posted by the users of a company
	@Override
	public List<JobsModel> getJobsByCompany(String companyname) {
		String sql = "SELECT * FROM jobs WHERE companyname = '" + companyname + "'";
		RowMapper<JobsModel> rowMapper = new JobsRowMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}

	//return if job is present in jobs table
	@Override
	public boolean jobExists(String jobname, String companyname) {
		String sql = "SELECT count(*) FROM jobs WHERE companyname = ? and jobname=?";
		int count = jdbcTemplate.queryForObject(sql, Integer.class, companyname, jobname);
		System.out.println("SRI jobsDAO jobExists count: " + count);
		if (count == 0) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public int getLastJobId() {
		String sql = "SELECT MAX(id) FROM jobs";
		int count = jdbcTemplate.queryForObject(sql, Integer.class);
		return count;

	}

	//to update the values of existing job
	@Override
	public void updateJob(JobsModel job) {
		String sql = "UPDATE jobs SET salary=?, type=? WHERE id=?";
		jdbcTemplate.update(sql, job.getSalary(), job.getType(), job.getId());
	}

	// for Handling Requirement actions
	@Override
	public void addJobReq(RequirementModel req) {
		
		// Insert a requirement
		String sql = "INSERT INTO requirements (id, jobid, applid, qualification, posses, skill, scale) values (?, ?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, req.getId(), req.getJobid(), req.getApplid(), req.getQualification(), req.getPosses(),
				req.getSkill(), req.getScale());
		
		sql = "SELECT count(*) FROM requirements WHERE applid = ? and jobid = ?";
		int count = jdbcTemplate.queryForObject(sql, Integer.class, req.getApplid(), req.getJobid());
		if (count == 1) {
			sql = "SELECT id FROM requirements WHERE applid = ? and jobid = ?";
			int reqId = jdbcTemplate.queryForObject(sql, Integer.class, req.getApplid(), req.getJobid());
			
			req.setId(reqId);
		}

	}

	//returns the list of all requirements
	@Override
	public List<RequirementModel> getAllReqs() {
		String sql = "SELECT * FROM requirements";
		RowMapper<RequirementModel> rowMapper = new RequirementRowMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}

	//return the list of requirements for the passed jobid from Db-requirements table
	@Override
	public List<RequirementModel> getReqById(int jobId) {
		String sql = "SELECT * FROM requirements WHERE jobId=" + jobId + " and applid= 0";
		RowMapper<RequirementModel> rowMapper = new RequirementRowMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}

	//return the list of requirements for the passed applicant Id from Db-requirements table
	@Override
	public List<RequirementModel> getReqByApplId(int jobId, int applId) {
		String sql = "SELECT * FROM requirements WHERE jobId=" + jobId + " and applid=" + applId;
		RowMapper<RequirementModel> rowMapper = new RequirementRowMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}
	
	//returns true if the requirement exists for based on the values available
	@Override
	public boolean reqExists(RequirementModel req) {
		String opt = "";
		String sql = "";
		int count = -1;

		if ((req.getApplid() > 0) && (req.getQualification() != null && !req.getQualification().isEmpty())) {
			// to check if the same applicant has entry with same 'applid', 'jobid' and 'qualification'
			opt = "hasApplidHasQual";
		} else if ((req.getApplid() > 0) && (req.getSkill() != null && !req.getSkill().isEmpty())) {
			// to check if same applicant has entry with same 'applid', 'jobid' and 'skill'
			opt = "hasApplidHasSkill";
		} else if ((req.getApplid() == 0)) {
			// all verifications are for jobs posts and job edits
			if ((req.getQualification() != null && !req.getQualification().isEmpty())) {
				// to chekc if a job exists wid same 'jobid' and 'qualification'
				opt = "HasJobQual";
			} else if (!(req.getScale() == 0) && (req.getSkill() != null && !req.getSkill().isEmpty())) {
				// to chekc if a job exists wid same 'jobid' and 'skill' with same 'scale'
				opt = "HasJobSkillScale";
			}
		}

		switch (opt) {
		case "hasApplidHasQual":
			// to check if the same applicant has entry with same 'applid', 'jobid' and 'qualification'
			sql = "SELECT count(*) FROM requirements WHERE applid = ? and jobid=? and qualification=?";
			count = jdbcTemplate.queryForObject(sql, Integer.class, req.getApplid(), req.getJobid(),
					req.getQualification());
			if (count == 0) {
				return false;
			} else {
				return true;
			}

		case "hasApplidHasSkill":
			// to check if same applicant has entry with same 'applid', 'jobid' and 'skill'
			sql = "SELECT count(*) FROM requirements WHERE applid = ? and jobid=? and skill=?";
			count = jdbcTemplate.queryForObject(sql, Integer.class, req.getApplid(), req.getJobid(), req.getSkill());
			if (count == 0) {
				return false;
			} else {
				return true;
			}

		case "HasJobQual":
			// to chekc if a job exists wid same 'jobid' and 'qualification'
			sql = "SELECT count(*) FROM requirements WHERE jobid=? and qualification=?";
			count = jdbcTemplate.queryForObject(sql, Integer.class, req.getJobid(), req.getQualification());
			if (count == 0) {
				return false;
			} else {
				return true;
			}

		case "HasJobSkillScale":
			// to chekc if a job exists wid same 'jobid' and 'skill' with same 'scale'
			sql = "SELECT count(*) FROM requirements WHERE jobid=? and skill=? and scale=?";
			count = jdbcTemplate.queryForObject(sql, Integer.class, req.getJobid(), req.getSkill(), req.getScale());
			if (count == 0) {
				return false;
			} else {
				return true;
			}

		default:
			count = -1;
			return true;
		}

	}

	@Override
	public int getLastId() {
		String sql = "SELECT MAX(applid) FROM requirements";
		int count = jdbcTemplate.queryForObject(sql, Integer.class);
		return count;

	}

	//to update an exisiting requirement
	@Override
	public void updateJobReq(RequirementModel req) {

		if (req.getQualification() != null) {
			String sql = "UPDATE requirements SET qualification=? WHERE jobid=?";
			jdbcTemplate.update(sql, req.getQualification(), req.getJobid());
		} else if (req.getSkill() != null) {
			String sql = "UPDATE requirements SET skill=?, scale=? WHERE jobid=? and id=?";
			jdbcTemplate.update(sql, req.getSkill(), req.getScale(), req.getJobid(), req.getId());
		}
	}

	//to delete requirement from requirements table
	@Override
	public void deleteReq(int id) {
		System.out.println("SRI DAO id: " + id);
		String sql = "DELETE FROM requirements WHERE id=?";
		jdbcTemplate.update(sql, id);
	}

}
