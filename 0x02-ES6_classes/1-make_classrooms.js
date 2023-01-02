import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const a = new ClassRoom(19);
  const b = new ClassRoom(20);
  const c = new ClassRoom(34);

  arr.push(a);
  arr.push(b);
  arr.push(c);

  return arr;
}
