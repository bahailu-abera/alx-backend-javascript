export default function updateUniqueItems(map) {
  try {
    const newValue = 100;
    const unique = 1;
    map.forEach((value, key) => {
      if (value === unique) {
        map.set(key, newValue);
      }
    });
  } catch (err) {
    console.log(err);
    throw new Error('Cannot process');
  }

  return map;
}
