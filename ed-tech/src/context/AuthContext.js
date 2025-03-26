import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
    setLoading(false);
  }, [token]);

  const login = async (credentials) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/auth/local`,
        credentials
      );
      localStorage.setItem("token", data.jwt);
      setToken(data.jwt);
      navigate("/dashboard");
    } catch (error) {
      throw error.response.data.error;
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/auth/local/register`,
        userData
      );
      localStorage.setItem("token", data.jwt);
      setToken(data.jwt);
      navigate("/dashboard");
    } catch (error) {
      throw error.response.data.error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
