/**
* returns list of ids from list of objects
*/
export default function getListStudentIds(lstObj) {
  let ids;
  try {
    ids = lstObj.map((obj) => obj.id);
  } catch (err) {
    ids = [];
  }
  return ids;
}
