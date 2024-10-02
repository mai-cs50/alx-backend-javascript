import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Call the functions and store the promises
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Wait for all promises to settle
  const results = await Promise.allSettled([signUpPromise, uploadPromise]);

  // Return the structured result
  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}