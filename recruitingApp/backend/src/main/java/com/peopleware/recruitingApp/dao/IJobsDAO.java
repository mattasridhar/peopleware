package com.peopleware.recruitingApp.dao;

import java.util.List;

import com.peopleware.recruitingApp.models.JobsModel;
import com.peopleware.recruitingApp.models.RequirementModel;

public interface IJobsDAO {

	// for adding jobs to db
	int addJob(JobsModel job);

	List<JobsModel> getAllJobs();

	JobsModel getJobById(int jobId);

	List<JobsModel> getJobsByCompany(String companyname);

	boolean jobExists(String jobname, String companyname);

	int getLastJobId();

	void updateJob(JobsModel job);

	// for adding job requirements to db
	void addJobReq(RequirementModel req);

	List<RequirementModel> getAllReqs();

	List<RequirementModel> getReqById(int jobId);

	// RequirementModel getReqById(int jobId);
	boolean reqExists(RequirementModel req);

	int getLastId();

	void updateJobReq(RequirementModel req);

	void deleteReq(int id);

	List<RequirementModel> getReqByApplId(int jobId, int applId);

}