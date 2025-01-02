import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCourse = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:3001/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setName(response.data.name);
      } catch (err) {
        console.error("Error fetching student:", err);
      }
    };

    fetchStudent();
  }, [id]);

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:3001/user/${id}`,
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Student updated successfully");
      navigate("/all-courses");
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  return (
    <div>
      <h1>Update Student</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateCourse;




