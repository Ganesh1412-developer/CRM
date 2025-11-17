import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupImage from "../assets/signup.png"; // <-- Your image import

export default function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // ---------------------------- VALIDATION ----------------------------
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter 10-digit phone number";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must accept terms to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------------------- SUBMIT ----------------------------
  const handleSignup = () => {
    if (!validate()) return;

    console.log("Signup data:", formData);
    alert("Signup successful!");

    // Navigate to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100   p-4 relative overflow-hidden">
      
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
        
        {/* ---------------- LEFT IMAGE SECTION ---------------- */}
        <div className="md:w-1/2  bg-gradient-to-br from-blue-100 via-cyan-300 to-teal-200 p-12 flex items-center justify-center relative">
          <img 
            src={SignupImage} 
            alt="Signup Illustration"
            className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
          />
        </div>

        {/* ---------------- RIGHT FORM SECTION ---------------- */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Create Account</h2>

          <div className="space-y-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50"
                />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50"
                />
                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50"
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>
            </div>

            {/* Password + Confirm */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50"
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => handleChange("agreeTerms", e.target.checked)}
              />
              <span className="text-sm text-gray-700">I agree to the terms</span>
            </div>
            {errors.agreeTerms && <p className="text-red-500 text-xs">{errors.agreeTerms}</p>}

            {/* Submit */}
            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Signup
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?
              <button onClick={() => navigate("/login")} className="text-emerald-500 ml-1">
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
