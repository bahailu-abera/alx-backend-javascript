export default function getStudentIdsSum(students) {
  try {
    return students.map((obj) => obj.id).reduce((accumulator, current) => accumulator + current);
  } catch (err) {
    return 0;
  }
}
