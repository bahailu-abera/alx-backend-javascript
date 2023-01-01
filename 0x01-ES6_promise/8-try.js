export default function divideFunction(numerator, denominator) {
  let result;
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }

  try {
    result = numerator / denominator;
  } catch (err) {
    console.log(err);
  }
  return (result);
}
