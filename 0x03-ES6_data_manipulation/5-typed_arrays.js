export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8 = new Int8Array(buffer);
    int8.set([value], position);
    return new DataView(buffer);
  } catch (err) {
    throw new Error('Position outside range');
  }
}
