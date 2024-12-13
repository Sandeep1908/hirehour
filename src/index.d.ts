//Home card details

interface HomeCardTypes {
  imgUrl: string;
  title: string;
  description: string;
}

//Review info person details

interface reviewDetailsTypes {
  label: string;
  value: string;
}

//Job Description Details details

interface jobDescriptionTypes {
  id:number;
  img: string;
  title: string;
  company: string;
  designation: string;
  location: string;
  mode: string;
  pay: string;
  workTime: string;
  techStacks: string[];
  employmentType: string[];
  workAuthorization: string[];
  summary:string;
  jobDescription:string;
  responsibilities:string;
  requirements:string;
  niceToHaves:string[]
  additionalBenefits:string;
  notes:string;
  aboutCompany:string;
  companyPrivacy:string;
}


type LocationValue = {
  place?: string | undefined;
  city?: string | undefined;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
};

interface EducationDetail {
  id: number;
  userID: number;
  degree: string;
  schoolName: string;
  schoolLocation: string;
  durationStart: string;
  durationEnd: string | null;
  netMarks: number;
  outOf: number;
  isCurrentlyAttending: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}


 
interface WorkExperienceDetail {
  ID: number;
  userID: number;
  companydetails: string;
  domain: number;
  role: number;
  place: string;
  durationStart: string;
  durationEnd: string | null;
  presentEmployer: boolean;
  descriptionOfExperience: string;
  jobCategory: string;
  jobType: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}


type SummaryDetails={
  summary:string
}


type JobTypes = {
  id: number;
  recruiterID: number;
  hasOwnATS: boolean;
  atsLink: string;
  jobRoleName: string;
  accommodationType: string;
  jobLocation: string;
  willingnessToRelocateQuestionnaire: boolean;
  jobDomain: string;
  employmentType: string; // This will store the JSON string for employment types
  isVisaSponsorshipProvided: boolean;
  workAuthorizationAccepting: string; // JSON string for work authorization types
  numberOfPositionsHiring: number;
  experienceLevelNeeded: string;
  yearsOfExpNeeded: number;
  companyID: number | null;
  salaryOfferedRangeStart: number | null;
  salaryOfferedRangeEnd: number | null;
  salaryOfferedRangeType: string | null;
  jobDescription: string | null;
  workStack: string | null;
  additionalBenefits: string | null;
  isPosted: boolean;
  datePosted: string | null;
  isActive: boolean | null;
  createdAt: string;
  jobassociatedquestionnaires: any[]; // Assuming this is an array, adjust as needed
};