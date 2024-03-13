#!/usr/bin/node
export default function getStudentIdsSum(list) {
  return list.reduce((a, b) => (
    a.id || a + b.id
  ), 0);
}
