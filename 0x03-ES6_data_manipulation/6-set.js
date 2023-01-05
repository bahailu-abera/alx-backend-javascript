export default function setFromArray(array) {
  try {
    return new Set(array);
  } catch (err) {
    return new Set();
  }
}
