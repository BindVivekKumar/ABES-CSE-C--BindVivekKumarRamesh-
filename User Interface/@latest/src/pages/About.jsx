import { BrowserRouter, Routes, Route } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        User Management System
      </h1>
      <p className="text-gray-600 text-lg">
        Add, View, Edit and Manage Users Easily
      </p>
    </div>
  );
};

export default About;