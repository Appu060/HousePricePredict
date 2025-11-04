import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔹 Send login request to backend
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email,
        password,
      });

      const data = response.data;

      if (data.token) {
        // 🔹 Store token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: data.username,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
          })
        );

        // 🔹 Update token in parent state
        setToken(data.token);

        // 🔹 Notify success and redirect
        alert("✅ Login successful!");
        navigate("/profile");
      } else {
        alert("❌ Login failed: No authentication token received");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert("❌ Invalid email or password");
        } else if (err.response.status === 401) {
          alert("❌ Unauthorized: Please check your credentials");
        } else {
          alert(`❌ Server error: ${err.response.status}`);
        }
      } else {
        alert("❌ Network error: Unable to connect to the server");
      }
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
      <div className="bg-white/90 rounded-2xl shadow-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center text-[#4b3429] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#4b3429] mb-1 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#b7d470]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-[#4b3429] mb-1 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#b7d470]"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#b7d470] hover:bg-[#a1a861] text-white font-semibold py-2 rounded-lg transition mt-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex justify-center mt-4 text-sm text-gray-600">
          <Link to="/signup" className="hover:text-[#4b3429]">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
