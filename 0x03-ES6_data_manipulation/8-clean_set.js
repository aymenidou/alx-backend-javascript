#!/usr/bin/node
export default function cleanSet(set, startString) {
  const string = [];
  for (const elt of set.values()) {
    if (typeof elt === 'string' && elt.startsWith(startString)) {
      const eltSubStr = elt.substring(startString.length);
      if (eltSubStr && eltSubStr !== elt) {
        string.push(eltSubStr);
      }
    }
  }
  return string.join('-');
}
