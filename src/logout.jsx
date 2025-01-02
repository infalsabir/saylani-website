import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show a confirmation dialog
    toast.warn('Are you sure you want to log out?', {
      position: 'top-center',
      autoClose: false, // Keep open until user confirms
      closeOnClick: false,
      draggable: false,
      hideProgressBar: true,
      buttons: [
        {
          label: 'Yes, Logout',
          onClick: () => {
            // Remove the token from localStorage
            localStorage.removeItem('token');
            toast.success('Logged out successfully!');
            // Redirect to the home page
            navigate('/');
          },
        },
        {
          label: 'Cancel',
          onClick: () => {
            toast.dismiss();
          },
        },
      ],
    });
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/31fff6ed29c1493c52c101233ba18587.jpeg')",
      }}
    >
      {/* Overlay with specified gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 48, 179, 0.2) 0%, rgba(153, 202, 60, 0.2) 100%)",
        }}
      ></div>

      {/* Centered form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="p-8 rounded-lg shadow-lg w-full max-w-md"
          style={{
            background: "linear-gradient(180deg, #99CA3C 0%, #0030B3 100%)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Logout</h2>
          <p className="text-center text-white mb-4">
            Are you sure you want to log out?
          </p>

          <div className="flex justify-between space-x-4">
            {/* Confirm Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full bg-lime-400 text-white py-2 px-4 rounded-full hover:bg-lime-600"
            >
              Yes, Logout
            </button>

            {/* Cancel Button */}
            <button
              onClick={() => navigate(-1)} // Go back to the previous page
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
