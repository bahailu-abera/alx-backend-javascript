export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let i = 0;

  while (i < reportWithIterator.length - 1) {
    str += reportWithIterator[i];
    str += ' | ';
    i += 1;
  }
  str += reportWithIterator[i];

  return str;
}
