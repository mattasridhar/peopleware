package com.peopleware.recruitingApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.peopleware.recruitingApp.models.ApplicantsModel;
import com.peopleware.recruitingApp.models.JobsModel;
import com.peopleware.recruitingApp.services.ISelectionService;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:4500")
public class SelectionController {

	@Autowired
	private ISelectionService selectionService;

	// testing api connection.
	@RequestMapping(method = RequestMethod.GET, value = "/hello")
	@ResponseBody
	public ResponseEntity<String> getGreeting() {
		System.out.println("API says Hello from SelectionController");
		return new ResponseEntity<String>("[{ 'text': 'API says Hello from SelectionController'}]", HttpStatus.OK);
	}

	// mapping to return the list of all eligible applicants
	@GetMapping("selAppl/{id}")
	public ResponseEntity<List<ApplicantsModel>> getSelApplsByJobId(@PathVariable("id") String jobid) {
		List<ApplicantsModel> appl = selectionService.getSelApplsByJobId(Integer.parseInt(jobid));

		if (appl.isEmpty() || ObjectUtils.isEmpty(appl)) {
			return new ResponseEntity<List<ApplicantsModel>>(appl, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<ApplicantsModel>>(appl, HttpStatus.OK);
		}

	}
}
