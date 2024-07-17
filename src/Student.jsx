import Students from "./Students";
function Student() {
  const students = Students();

  return (
    <div>
      <h1>Student Grades</h1>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>Student Name</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{stud.name}</td>
              <td>{stud.department}</td>
              <td>{stud.finalGrade}</td>
              <td>{stud.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
// export default function Student() {
//   return (
//     <div>
//       <h1>Student Grades</h1>
//       <ul>
//         {Students.map((student, index) => (
//           <li key={index}>
//             Name: {student.name}, Department: {student.department}, Final Grade:{" "}
//             {student.finalGrade}, Status: {student.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const Student = ({ name, price, emoji }) => {
//   return (
//     <li>
//       {emoji} {name} - ${price}
//     </li>
//   );
// };

// export default Student;
