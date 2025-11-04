import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    previous_works: "",
    photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // For showing API errors

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Account created successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          address: "",
          previous_works: "",
          photo: null,
        });
      } else {
        setError(data.error || "❌ Signup failed. Try again.");
      }
    } catch (err) {
      setError("⚠️ Error connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f4f4f4] px-4"
      style={{
        backgroundImage: "url('/house-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/90 rounded-2xl shadow-lg max-w-lg w-full p-8">
        <h2 className="text-3xl font-bold text-center text-[#4b3429] mb-6">
          Create Your Profile
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#4b3429] mb-1">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#4b3429] mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[#4b3429] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#4b3429] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#4b3429] mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your city, street, etc."
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#4b3429] mb-1">
              Previous Works
            </label>
            <textarea
              name="previous_works"
              value={formData.previous_works}
              onChange={handleChange}
              rows="3"
              placeholder="List your previous projects or experiences..."
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium text-[#4b3429] mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>

          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#b7d470] hover:bg-[#a1a861] text-white font-semibold py-2 rounded-lg transition mt-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="flex justify-center mt-4 text-sm text-gray-600">
          <Link to="/login" className="hover:text-[#4b3429]">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
