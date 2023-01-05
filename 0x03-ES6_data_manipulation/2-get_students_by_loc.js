export default function getStudentsByLocation(lstObj, city) {
  try {
    return lstObj.filter((obj) => obj.location === city);
  } catch (err) {
    return [];
  }
}
