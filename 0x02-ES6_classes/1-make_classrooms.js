#!/usr/bin/node
import ClassRoom from "./0-classroom.js";
export default function initializeRooms() {
  let classRooms = Array();
  classRooms.push(new ClassRoom(19));
  classRooms.push(new ClassRoom(20));
  classRooms.push(new ClassRoom(34));
  return classRooms;
}
