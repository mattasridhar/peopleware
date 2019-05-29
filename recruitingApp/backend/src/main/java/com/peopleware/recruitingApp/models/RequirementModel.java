package com.peopleware.recruitingApp.models;

public class RequirementModel {

	private int id;
	private int jobid;// to store the Job ID
	private int applid;// to store the Applicant ID
	private String qualification;// to store the academic requirements
	private Boolean posses;// for applicants to store whether he has the qualification of not
	private String skill;// to store the skill requirement
	private int scale;// to store the scale of skill (1-5) 5 = Highly Skillful

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getJobid() {
		return jobid;
	}

	public void setJobid(int jobid) {
		this.jobid = jobid;
	}

	public int getApplid() {
		return applid;
	}

	public void setApplid(int applid) {
		this.applid = applid;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public Boolean getPosses() {
		return posses;
	}

	public void setPosses(Boolean posses) {
		this.posses = posses;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public int getScale() {
		return scale;
	}

	public void setScale(int scale) {
		this.scale = scale;
	}
}
