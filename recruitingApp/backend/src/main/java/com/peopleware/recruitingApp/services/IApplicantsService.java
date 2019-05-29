package com.peopleware.recruitingApp.services;

import java.util.List;

import com.peopleware.recruitingApp.models.ApplicantsModel;

public interface IApplicantsService {
	List<ApplicantsModel> getAllApplicants();

	int addApplicant(ApplicantsModel appl);

}
