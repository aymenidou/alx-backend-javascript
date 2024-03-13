#!/usr/bin/node
export default function getListStudentIds(list) {
  return (!(list instanceof Array) ? [] : list.map((elt) => (elt.id)));
}
