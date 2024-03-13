#!/usr/bin/node
export default function updateStudentGradeByCity(list, city, grade) {
  const naGrade = { grade: 'N/A' };
  return list
    .filter((std) => (std.location === city))
    .map((std) => ({
      id: std.id,
      firstName: std.firstName,
      location: std.location,
      grade: (grade.filter((grd) => (grd.studentId === std.id)).pop() || naGrade).grade,
    }));
}
