package com.peopleware.recruitingApp.dao;

import java.util.List;

import com.peopleware.recruitingApp.models.ApplicantsModel;

public interface IApplicantsDAO {
	List<ApplicantsModel> getAllApplicants();

	int addApplicant(ApplicantsModel appl);

	boolean applicantExists(String fullname, int jobid);

	List<ApplicantsModel> getAllApplByJobId(int jobid);

}
