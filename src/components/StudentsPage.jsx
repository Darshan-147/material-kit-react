// import React, { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
// } from 'firebase/firestore';
// import { db } from '../utils/firebase'; 
// // Button component
// export const Button = ({ children, variant = 'primary', type = 'button', ...props }) => {
//   const variants = {
//     primary: 'bg-blue-500 hover:bg-blue-600 text-white',
//     ghost: 'bg-transparent hover:bg-gray-100 text-gray-700'
//   };

//   return (
//     <button
//       type={type}
//       className={`px-4 py-2 rounded-md transition-colors ${variants[variant]}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// // Input component
// export const Input = React.forwardRef(({ className, ...props }, ref) => {
//   return (
//     <input
//       className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//       ref={ref}
//       {...props}
//     />
//   );
// });

// // Modal component
// export const Modal = ({ children, open, onClose }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg max-w-md w-full">
//         {children}
//       </div>
//     </div>
//   );
// };

// const StudentsPage = () => {
//   const [students, setStudents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     class: '',
//     section: '',
//     rollNumber: '',
//     field1: '',
//     field2: '',
//     field3: '',
//     field4: '',
//     field5: '',
//     field6: '',
//     field7: '',
//     field8: '',
//   });

//   const fetchStudents = async () => {
//     const studentsCollection = collection(db, 'students');
//     const studentDocs = await getDocs(studentsCollection);
//     setStudents(
//       studentDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//     );
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddStudent = async () => {
//     try {
//       const studentsCollection = collection(db, 'students');
//       await addDoc(studentsCollection, formData);
//       fetchStudents();
//       setFormData({
//         id: '',
//         name: '',
//         class: '',
//         section: '',
//         rollNumber: '',
//         field1: '',
//         field2: '',
//         field3: '',
//         field4: '',
//         field5: '',
//         field6: '',
//         field7: '',
//         field8: '',
//       });
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   const handleDeleteStudent = async (id) => {
//     try {
//       await deleteDoc(doc(db, 'students', id));
//       fetchStudents();
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Students</h1>
//         <Button onClick={() => setIsModalOpen(true)}>Add Student</Button>
//       </div>

//       <table className="min-w-full table-auto border-collapse border border-gray-200">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 border">ID</th>
//             <th className="px-4 py-2 border">Name</th>
//             <th className="px-4 py-2 border">Class</th>
//             <th className="px-4 py-2 border">Section</th>
//             <th className="px-4 py-2 border">Roll Number</th>
//             <th className="px-4 py-2 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id} className="text-center">
//               <td className="px-4 py-2 border">{student.id}</td>
//               <td className="px-4 py-2 border">{student.name}</td>
//               <td className="px-4 py-2 border">{student.class}</td>
//               <td className="px-4 py-2 border">{student.section}</td>
//               <td className="px-4 py-2 border">{student.rollNumber}</td>
//               <td className="px-4 py-2 border flex justify-center gap-2">
//                 <Button variant="ghost">View</Button>
//                 <Button variant="ghost">Edit</Button>
//                 <Button
//                   variant="ghost"
//                   onClick={() => handleDeleteStudent(student.id)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for adding a student */}
//       <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div className="p-4">
//           <h2 className="text-xl font-bold mb-4">Add Student</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleAddStudent();
//             }}
//           >
//             {Object.keys(formData).map((field) => (
//               <div key={field} className="mb-4">
//                 <label htmlFor={field} className="block font-medium mb-1">
//                   {field.charAt(0).toUpperCase() + field.slice(1)}
//                 </label>
//                 <Input
//                   id={field}
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full"
//                 />
//               </div>
//             ))}
//             <div className="flex justify-end gap-4">
//               <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
//                 Cancel
//               </Button>
//               <Button type="submit">Submit</Button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default StudentsPage;
