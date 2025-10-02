import React, { useState } from "react";

function FormTable() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.course) {
      setRecords([...records, formData]);
      setFormData({ name: "", email: "", course: "" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 shadow-xl p-6 rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Student Form</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter Course"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Submit
        </button>
      </form>

      {/* Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Submitted Records</h2>
        <table className="w-full border-collapse border border-gray-300 shadow-sm">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, index) => (
              <tr key={index} className="text-center hover:bg-indigo-50 transition-colors">
                <td className="border border-gray-300 px-4 py-2">{rec.name}</td>
                <td className="border border-gray-300 px-4 py-2">{rec.email}</td>
                <td className="border border-gray-300 px-4 py-2">{rec.course}</td>
              </tr>
            ))}
            {records.length === 0 && (
              <tr>
                <td colSpan="3" className="p-4 text-gray-400 text-center">
                  No records yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormTable;
