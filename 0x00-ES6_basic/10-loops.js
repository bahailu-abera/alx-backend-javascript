export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const ele of array) {
    // eslint-disable-next-line
    array[i] = appendString + ele;
    i += 1;
  }

  return array;
}
