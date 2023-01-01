import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();

  return Promise.all([p1, p2]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
