import React, { useState } from 'react'

// Define the types for form data
interface PatientFormData {
    firstName: string;
    lastName: string;
    middleName: string;
    dob: string;
    gender: 'Male' | 'Female' | 'Other';
    phoneNumber: string;
    emailAddress: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
    occupation: string;
    preferredLanguage: string;
    abhaNumber: string;
    insuranceType: string;
    insuranceProvider: string;
    insurancePolicyNumber: string;
  }

const PatientRegistration:React.FC = () => {
    const [formData,setFormData]=useState<PatientFormData>({
        firstName: '',
        lastName: '',
        middleName: '',
        dob: '',
        gender: 'Male',
        phoneNumber: '',
        emailAddress: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: 'Meghalaya',
        postalCode: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        maritalStatus: 'Single',
        occupation: '',
        preferredLanguage: '',
        abhaNumber: '',
        insuranceType: '',
        insuranceProvider: '',
        insurancePolicyNumber: ''
  });

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const{name,value}=e.target 
    setFormData((prevData)=>({
        ...prevData,
        [name]:value
    }))
  }

  const handleSubmit=(e: React.FormEvent)=>{
    e.preventDefault();
    console.log("Form submitted, Patient registration was successful")
  }

  return (
    <div>
        <h2 className="text-4xl font-semibold text-center text-blue-500">PatientRegistration</h2>
        <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName}  onChange={handleChange} required/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
            </div>
            <div>
                <label>Middle Name (optional):</label>
                <input type="text" name="middleName" value={formData.middleName} onChange={handleChange}/>
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required/>
            </div>
            <div>
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required/>
            </div>
            <div>
            <label>Address Line 1:</label>
            <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required/>
            </div>
            <div>
            <label>Address Line 2 (optional):</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
            </div>
            <div>
            <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
            </div>
            <div>
            <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled
          />
            </div>
            <div>
            <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
            </div>
            <h2>Emergency Contact Details</h2>
            <div>
            <label>Emergency Contact Name:</label>
          <input
            type="text"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            required
          />
            </div>
            <div>
            <label>Emergency Contact Phone:</label>
          <input
            type="tel"
            name="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={handleChange}
            required
          />
            </div>
            <div>
                <h2>Additional Information</h2>
                <label>Marital Status:</label>
                <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                </select>
                </div>
                <div>
                <label>Occupation:</label>
                <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Preferred Language:</label>
                <input
                    type="text"
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>ABHA Number:</label>
                <input
                    type="text"
                    name="abhaNumber"
                    value={formData.abhaNumber}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Insurance Type:</label>
                <input
                    type="text"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Insurance Provider:</label>
                <input
                    type="text"
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Insurance Policy Number:</label>
                <input
                    type="text"
                    name="insurancePolicyNumber"
                    value={formData.insurancePolicyNumber}
                    onChange={handleChange}
                    required
                />
                </div>

            <div>
                <button type= "submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default PatientRegistration