package com.peopleware.recruitingApp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peopleware.recruitingApp.dao.IApplicantsDAO;
import com.peopleware.recruitingApp.models.ApplicantsModel;

@Service
public class ApplicantsService implements IApplicantsService {

	@Autowired
	private IApplicantsDAO applDAO;

	// to get list of all applicants
	@Override
	public List<ApplicantsModel> getAllApplicants() {
		return applDAO.getAllApplicants();
	}

	// to add a new applicant
	@Override
	public int addApplicant(ApplicantsModel appl) {
		if (applDAO.applicantExists(appl.getFullname(), appl.getJobid())) {
			return -1;
		} else {
			int applid = applDAO.addApplicant(appl);
			return applid;
		}
	}

}
