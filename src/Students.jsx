function Students() {
  const departments = ["Science", "Math", "English"];
  return [
    {
      name: "ariel",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "Pass",
    },
    {
      name: "ariel1",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "Pass",
    },
    {
      name: "ariel2",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "pass",
    },
    {
      name: "ariel3",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "Pass",
    },
    {
      name: "ariel4",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "Pass",
    },
    {
      name: "ariel5",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "Pass",
    },
    {
      name: "ariel6",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "Pass",
    },
    {
      name: "ariel7",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: Math.floor(Math.random() * 41) + 60,
      status: "Pass",
    },
    {
      name: "ariel8",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: "",
      status: "Fail",
    },
    {
      name: "ariel9",
      department: departments[Math.floor(Math.random() * departments.length)],
      finalGrade: "",
      status: "Fail",
    },
  ];
}
export default Students;

// import Student from "./Student";

// const Students = () => {
//   const students = [
//     { name: "Apple", price: 10, emoji: "🍎" },
//     { name: "Mango", price: 7, emoji: "🥭" },
//     { name: "Banana", price: 2, emoji: "🍌" },
//     { name: "Orange", price: 5, emoji: "🍊" },
//     { name: "Pineapple", price: 8, emoji: "🍍" },
//   ];

//   return (
//     <ul>
//       {students.map((fruit) => (
//         <Student
//           key={fruit.name}
//           name={fruit.name}
//           price={fruit.price}
//           emoji={fruit.emoji}
//         />
//       ))}
//     </ul>
//   );
// };

// export default Students;
