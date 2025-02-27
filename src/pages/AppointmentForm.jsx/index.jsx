import React, { useState } from 'react';


const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        cnic: '',
        name: '',
        phone: '',
        age: '',
        gender: '',
        doctorDesignation: '',
        doctorName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };


    return (
        <>
            <div className="r">
                <div className="form-container">
                    <h2>Appointment Form</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            CNIC:
                            <input
                                type="text"
                                name="cnic"
                                value={formData.cnic}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Phone Number:
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Age:
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>Gender:</label>
                        <div className="gender-options">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleChange}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleChange}
                                />
                                Female
                            </label>
                        </div>

                        <label>
                            Doctor Designation:
                            <input
                                type="text"
                                name="doctorDesignation"
                                value={formData.doctorDesignation}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Doctor Name:
                            <input
                                type="text"
                                name="doctorName"
                                value={formData.doctorName}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <button type="submit" className='appointbtn'>Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default AppointmentForm




