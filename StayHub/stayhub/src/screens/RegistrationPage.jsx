import React, { useState } from 'react';
import registration_png from '../images/registration_png.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'USER',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
    
        if (formData.password !== formData.confirmPassword) {
            setErrors({ confirmPassword: 'Passwords do not match!' });
            toast.error('Passwords do not match!');
            return;
        }
    
        // Determine API endpoint based on role
        const endpoint = formData.role === 'OWNER' 
            ? 'http://localhost:8080/api/owners/register' 
            : 'http://localhost:8080/api/users/register';
    
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                toast.success('Registration successful!');
                navigate('/login');
            } else {
                const errorData = await response.json();
                const errorMessage = errorData?.message || "An error occurred during registration.";
                setErrors({ general: errorMessage });
                toast.error(errorMessage);
            }
        } catch (error) {
            console.error('Registration request failed:', error);
            setErrors({ general: "A network error occurred. Please try again later." });
            toast.error('A network error occurred. Please try again later.');
        }
    };
    

    return (
        <div className="container-fluid" style={{ backgroundColor: '#FEF4EA', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-6 col-12 d-none d-md-block">
                    <img
                        src={registration_png}
                        alt="Registration Illustration"
                        className="img-fluid rounded"
                        style={{ height: '100%', objectFit: 'cover', transform: 'translateY(47px) translateX(70px)' }}
                    />
                </div>

                <div className="col-md-6 col-12 d-flex justify-content-center">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
                        <h2 className="text-center mb-4">Register</h2>

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Re-enter your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Role</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="USER"
                                        checked={formData.role === 'USER'}
                                        onChange={handleChange}
                                        className="form-check-input"
                                        style={{ accentColor: '#FF7700' }}
                                    />
                                    <label className="form-check-label">USER</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="OWNER"
                                        checked={formData.role === 'OWNER'}
                                        onChange={handleChange}
                                        className="form-check-input"
                                        style={{ accentColor: '#FF7700' }}
                                    />
                                    <label className="form-check-label">OWNER</label>
                                </div>
                                {errors.role && <small className="text-danger">{errors.role}</small>}
                            </div>

                        {errors.general && <div className="alert alert-danger">{errors.general}</div>}
                        <button
                            type="submit"
                            className="btn w-100"
                            style={{ backgroundColor: '#FF7700', borderColor: '#FF7700', color: 'white' }}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
