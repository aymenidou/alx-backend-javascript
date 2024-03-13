#!/usr/bin/node
export default function getStudentsByLocation(list, location) {
  return (list.filter((elt) => (elt.location === location)));
}
