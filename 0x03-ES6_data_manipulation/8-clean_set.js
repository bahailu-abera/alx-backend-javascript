export default function cleanSet(set, startString) {
  try {
    if (startString === '') {
      return '';
    }
    return [...set]
      .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
      .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
      .join('-');
  } catch (err) {
    return '';
  }
}
