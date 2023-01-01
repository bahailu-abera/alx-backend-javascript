export default function getFullResponseFromAPI(success) {
  const p = new Promise((res, rej) => {
    if (success) {
      res({ status: 200, body: 'Success' });
    } else {
      // eslint-disable-next-line
	rej(new Error('The fake API is not working currently'));
    }
  });

  return p;
}
