

import React, { useState } from "react";

function CreateCourses() {
  const [course, setCourse] = useState({ title: "", description: "" });
  const [courseList, setCourseList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course.title && course.description) {
      setCourseList([...courseList, course]);
      setCourse({ title: "", description: "" }); // Reset form
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Course</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Course Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter course title"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Course Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter course description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>

      <h2 className="text-xl font-bold mb-2">Courses List</h2>
      {courseList.length === 0 ? (
        <p>No courses added yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {courseList.map((c, index) => (
            <li key={index} className="mb-2">
              <strong>{c.title}</strong>
              <p>{c.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CreateCourses;
