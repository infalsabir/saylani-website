
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const AllStudents = () => {
//   const [students, setStudents] = useState([]);

//   const fetchStudents = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get("http://localhost:3001/courses", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setStudents(response.data.course);
//     } catch (err) {
//       console.error("Error fetching students:", err);
//     }
//   };

//   const handleUpdate = async (id) => {
//     const token = localStorage.getItem("token");
//     const updatedData = { name: "Updated Name" }; // Replace with actual updated data
//     try {
//       const response = await axios.put(`http://localhost:3001/users/${id}`, updatedData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log("Update successful:", response.data);
//       fetchStudents();
//     } catch (err) {
//       console.error("Error updating student:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     const token = localStorage.getItem("token");
//     if (window.confirm("Are you sure you want to delete this student?")) {
//       try {
//         const response = await axios.delete(`http://localhost:3001/users/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log("Delete successful:", response.data);
//         setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
//       } catch (err) {
//         console.error("Error deleting student:", err);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside className="w-1/6 bg-lime-400 text-white h-screen p-4">
//         <div className="flex flex-col space-y-6">
//           <div className="flex items-center">
//             <img
//               src="\Screenshot 2024-05-25 165735.png"
//               alt="Logo"
//               className="h-13 mr-2 bg-transparent"
//             />
//             <h1 className="text-xl font-bold text-center">Infal</h1>
//           </div>
//           <nav className="flex flex-col space-y-4">
//           <Link
//                   to="/create-course"
//                   className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
//                 >
//                  Create Courses
//                 </Link>
//                 <Link
//                   to="/all-courses"
//                   className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
//                 >
//                   Students
//                 </Link>
//                 <Link
//                   to="/settings"
//                   className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
//                 >
//                   Settings
//                 </Link>
//                 <Link
//                   to="/create-course"
//                   className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
//                 >
//                   Logout
//                 </Link>
//           </nav>
//         </div>
//       </aside>

//       <main className="flex-1 p-8">
//         <h2 className="text-2xl font-bold mb-6">All Students</h2>
//         <table className="border-collapse border w-full">
//           <thead>
//             <tr>
//               <th className="border p-4">Name</th>
//               <th className="border p-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student._id}>
//                 <td className="border p-4">{student.name}</td>
//                 <td className="border p-4">
//                   <button
//                     onClick={() => handleUpdate(student._id)}
//                     className="bg-blue-400 text-white px-4 py-2 rounded"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDelete(student._id)}
//                     className="bg-red-400 text-white px-4 py-2 rounded ml-2"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// };

// export default AllStudents;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllCourses = () => {
  const navigate = useNavigate();

  // State to hold all courses
  const [courses, setCourses] = useState([
    { id: 1, name: "Web Development" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "Graphic Designing" },
    { id: 4, name: "Cyber Security" },
    { id: 5, name: "Digital Marketing" },
  ]);

  // Handle deleting a course
  const handleDelete = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  // Handle updating a course
  const handleUpdate = (course) => {
    navigate("/update-course", { state: course }); // Pass course data to the update page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/6 bg-lime-400 text-white h-screen p-4">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center">
            <img
              src="\Screenshot 2024-05-25 165735.png"
              alt="Logo"
              className="h-13 mr-2 bg-transparent"
            />
            <h1 className="text-xl font-bold text-center">Infal</h1>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              to="/create-course"
              className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
            >
              Courses
            </Link>
            <Link
              to="/all-courses"
              className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
            >
              Students
            </Link>
            <Link
              to="/settings"
              className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
            >
              Settings
            </Link>
            <Link
              to="/logout"
              className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
            >
              Logout
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">All Courses</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-4">Course Name</th>
              <th className="border p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border">
                <td className="border p-4">{course.name}</td>
                <td className="border p-4">
                  <button
                    onClick={() => handleUpdate(course)}
                    className="text-white bg-gradient-to-r from-blue-400 to-green-400 text-center px-4 py-1 rounded-lg mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="text-white bg-gradient-to-r from-red-400 to-pink-400 text-center px-4 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AllCourses;
