#!/usr/bin/node
export default function groceriesList() {
  const mapValues = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(mapValues);
}