#!/usr/bin/node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const res = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  res.map((obj) => ({
    status: obj.status,
    value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
  }));
}
