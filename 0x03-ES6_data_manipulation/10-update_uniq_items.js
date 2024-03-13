#!/usr/bin/node
export default function updateUniqueItems(groceries_map) {
  if (!(groceries_map instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceries_map.forEach((value, key) => {
    if (value === 1) {
      groceries_map.set(key, 100);
    }
  });
}
