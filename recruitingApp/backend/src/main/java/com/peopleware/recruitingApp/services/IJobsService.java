package com.peopleware.recruitingApp.services;

import java.util.List;

import com.peopleware.recruitingApp.models.JobsModel;
import com.peopleware.recruitingApp.models.RequirementModel;

public interface IJobsService {
	// to Handle Job actions
	List<JobsModel> getAllJobs();

	JobsModel getJobById(int jobId);

	List<JobsModel> getJobsByCompany(String companyname);

	int addJob(JobsModel job);

	void updateJob(JobsModel job);

	// to Handle Job Requirement actions
	List<RequirementModel> getAllReqs();

	List<RequirementModel> getReqById(int jobId);

	boolean addReq(RequirementModel req);

	void updateJobReq(RequirementModel req);

	void deleteReq(int id);

}