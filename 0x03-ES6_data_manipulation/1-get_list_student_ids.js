#!/usr/bin/node
export default function getListStudentIds(list) {
  return (typeof (list) !== 'object' ? [] : list.map((elt) => (elt.id)));
}
