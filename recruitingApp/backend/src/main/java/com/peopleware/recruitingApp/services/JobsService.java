package com.peopleware.recruitingApp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peopleware.recruitingApp.dao.IJobsDAO;
import com.peopleware.recruitingApp.models.JobsModel;
import com.peopleware.recruitingApp.models.RequirementModel;

@Service
public class JobsService implements IJobsService {

	@Autowired
	private IJobsDAO jobsDAO;

	// to Handle Job Actions
	//return all available jobs
	@Override
	public List<JobsModel> getAllJobs() {
		return jobsDAO.getAllJobs();
	}

	//get a specific job based on jobid
	@Override
	public JobsModel getJobById(int jobId) {
		JobsModel obj = jobsDAO.getJobById(jobId);
		if (obj.getJobname() != null)
			return obj;
		else
			return null;
	}

	//get a specific job based on companyname
	@Override
	public List<JobsModel> getJobsByCompany(String companyname) {
		return jobsDAO.getJobsByCompany(companyname);
	}

	//insert a job
	@Override
	public synchronized int addJob(JobsModel job) {
		//do not proceed if job exists.
		if (jobsDAO.jobExists(job.getJobname(), job.getCompanyname())) {
			return -1;
		} else {
			// AutoIncreement ID for job
			if (job.getId() == 0) {
				int lastId = jobsDAO.getLastJobId();
				job.setId(++lastId);
			}
			int jobId = jobsDAO.addJob(job);
			return jobId;
		}
	}

	//update an existing job
	@Override
	public void updateJob(JobsModel job) {
		jobsDAO.updateJob(job);
	}

	// to Handle Requirement Actions
	//returns list of all requirements
	@Override
	public List<RequirementModel> getAllReqs() {
		return jobsDAO.getAllReqs();
	}

	//returns the list of requirements based on the jobID
	@Override
	public List<RequirementModel> getReqById(int jobId) {
		System.out.println("SRI Service jobId type: " + jobId);
		// TODO Auto-generated method stub
		return jobsDAO.getReqById(jobId);
	}

	//insert a new requirement
	@Override
	public synchronized boolean addReq(RequirementModel req) {
		if (jobsDAO.reqExists(req)) {
			return false;
		} else {
			jobsDAO.addJobReq(req);
			return true;
		}
	}

	//to update an existing requirement
	@Override
	public void updateJobReq(RequirementModel req) {
		jobsDAO.updateJobReq(req);
	}

	//to delete a requirement
	@Override
	public void deleteReq(int id) {
		jobsDAO.deleteReq(id);
	}
}
