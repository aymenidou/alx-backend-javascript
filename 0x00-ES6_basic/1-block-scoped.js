#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-used-vars
    const task2 = false; // eslint-disable-line no-used-vars
  }

  return [task, task2];
}
