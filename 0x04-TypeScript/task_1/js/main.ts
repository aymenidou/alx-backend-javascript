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
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

