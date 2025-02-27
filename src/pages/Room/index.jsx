import React, { useState } from 'react';



const Room = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    patientName: '',
    patientDisease: '',
    doctorName: '',
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
    console.log('Room Information Submitted:', formData);
  };


  return (
    <>
      <div className="r">
      <div className="form-container">
      <h2>Room Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Room Type:
          <select name="roomType" value={formData.roomType} onChange={handleChange} required>
            <option value="">Select Room Type</option>
            <option value="CCU">CCU</option>
            <option value="ICU">ICU</option>
            <option value="General Ward">General Ward</option>
          </select>
        </label>

        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Patient Disease:
          <input
            type="text"
            name="patientDisease"
            value={formData.patientDisease}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Doctor Dealing:
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className='roombtn'>Submit</button>
      </form>
    </div>
        
      </div>
    </>
  )
}

export default Room
