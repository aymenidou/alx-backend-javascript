#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const elt of array) {
    newArray.push(appendString + elt);
  }

  return newArray;
}
