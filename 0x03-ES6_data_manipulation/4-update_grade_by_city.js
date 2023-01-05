export default function updateStudentGradeByCity(students, city, newGrades) {
  try {
    const cityStudents = students.filter((student) => student.location === city).map((student) => {
      const idGrade = newGrades.find((std) => std.studentId === student.id);

      return { ...student, grade: idGrade ? idGrade.grade : 'N/A' };
    });

    return cityStudents;
  } catch (err) {
    return [];
  }
}
