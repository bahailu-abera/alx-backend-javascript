export default function hasValuesFromArray(set, array) {
  try {
    for (const ele of array) {
      if (!set.has(ele)) {
        return false;
      }
    }
    return true;
  } catch (err) {
    return false;
  }
}
