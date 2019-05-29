package com.peopleware.recruitingApp.services;

import java.util.List;

import com.peopleware.recruitingApp.models.ApplicantsModel;

public interface ISelectionService {
	List<ApplicantsModel> getSelApplsByJobId(int jobid);

}
