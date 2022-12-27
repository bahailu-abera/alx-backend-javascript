export default function createIteratorObject(report) {
  const res = [];
  for (const dep of Object.values(report.allEmployees)) {
    res.push(...dep);
  }

  return res;
}
