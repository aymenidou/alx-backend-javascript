export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // for additional dynamic attributes
}
export interface Directors extends Teacher {
  numberOfReports: number;
}