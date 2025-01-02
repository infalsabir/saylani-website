import React from "react";
import { useNavigate } from "react-router-dom";

const TypeSelection = () => {
  const navigate = useNavigate();

  const handleTeacherClick = () => {
    navigate("/teacher-dashboard");
  };
  const handleStudentClick = () => {
    navigate("/student-dashboard");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
      <h2 className="text-3xl font-bold text-white mb-8">Select Your Role</h2>
      <div className="flex space-x-8">
        <button
          onClick={handleTeacherClick}
          className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-100"
        >
          Teacher
        </button>

        <button
          onClick={handleStudentClick}
          className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-100"
        >
          Student
        </button>
      </div>
    </div>
  );
};

export default TypeSelection;



