export interface JobSchema{
    id?: number;
    companyname: string;
    jobname: string;
    description: string;
    salary: number;
    type: string;
}

export interface RequirementSchema{
    id?: number;
    jobid?: number;
    applid?: number;
    qualification?: string;
    posses?: boolean;
    skill?: string;
    scale?: number;
}