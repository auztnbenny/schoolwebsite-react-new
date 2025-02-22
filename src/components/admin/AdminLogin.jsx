import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/admin/AdminLogin.css";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Sending API request with data:", {
        title: "UserLogin",
        ReqUsername: credentials.username.toLowerCase(),
        ReqPassword: credentials.password.toLowerCase(),
      });

      const response = await fetch("https://ptalnodebo.starnold.in/website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "UserLogin",
          ReqUsername: credentials.username.toLowerCase(),
          ReqPassword: credentials.password.toLowerCase(),
        }),
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const textData = await response.text(); // Get response as text first
      console.log("Raw API Response:", textData);

      // Extract JSON part before "||JasonEnd"
      const cleanJsonText = textData.split("||")[0];
      const data = JSON.parse(cleanJsonText); // Parse JSON safely

      console.log("Parsed API Response:", data);

      if (data[0]?.InfoField.toLowerCase() === "login success") {
        localStorage.setItem("adminToken", "true");
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(`Server error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <h2>Admin Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
