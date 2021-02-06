import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_OWNED_PET } from '../../utils/mutations';
import './index.css';

function AddPetForm(props) {
  const [formState, setFormState] = useState({ petName: '', petType: '', petAge: '', petDescription: '', petLocation: '', petFixed: 'Yes', petEmail: '', petGender: 'Male'});
  const [addOwnedPet] = useMutation(ADD_OWNED_PET);
  const history = useHistory();
  const handleFormSubmit = async event => {
    event.preventDefault();

    const result = await addOwnedPet({
      variables: {
        name: formState.petName,
        type: formState.petType,
        age: +formState.petAge,
        gender: formState.petGender,
        location: +formState.petLocation,
        description: formState.petDescription,
        petemail: formState.petEmail,
        fixed: formState.petFixed
      }
    });
    history.push('/');
  }
    

const handleChange = event => {
  const { name, value } = event.target;
  setFormState({
    ...formState,
    [name]: value
  });
};

return (
  <div className="AddPetSection">
    <div className="AddPetContainer">
      <div className="AddPetTitle">Fill out this form to create your pet's adoption post</div>
      <form className="AddPetInformation" onSubmit={handleFormSubmit}>
        <div className="AddPetInformationInputContainer">
          <div className="AddPetFormLeft">
            <div className="AddPetName">
              <label htmlFor="petName">Pet Name:</label>
              <input
                className="AddPetNameInputField"
                id="petName"
                name="petName"
                type="input"
                onChange={handleChange}
                value={formState.petName}
              />
            </div>
            <div className="AddPetType">
              <label htmlFor="petType">Type of Animal:</label>
              <input
                className="AddPetTypeInputField"
                id="petType"
                name="petType"
                type="input"
                value={formState.petType}
                onChange={handleChange}
              />
            </div>
            <div className="AddPetAge">
              <label htmlFor="petAge">Pet Age:</label>
              <input
                className="AddPetAgeInputField"
                id="petAge"
                name="petAge"
                type="input"
                value={formState.petAge}
                onChange={handleChange}
              />
            </div>
            <div className="AddPetGender">
                <label htmlFor="petGender">Gender:</label>
                <select className="AddPetGenderInputField" id="petGender" name="petGender" value={formState.petGender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
          </div>

          <div className="AddPetFormRight">
            <div className="AddFixedStatus">
                <label htmlFor="petFixed">Fixed?</label>
                <select className="AddPetFixedInputField" id="petFixed" name="petFixed" value={formState.petFixed} onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            <div className="AddPetLocation">
              <label htmlFor="petLocation">Location (Zipcode):</label>
              <input
                className="AddPetLocationInputField"
                id="petLocation"
                name="petLocation"
                type="input"
                value={formState.petLocation}
                onChange={handleChange}
              />
            </div>
            <div className="AddPetEmail">
              <label htmlFor="petEmail">Email</label>
              <input
                className="AddPetEmailInputField"
                id="petEmail"
                name="petEmail"
                type="email"
                value={formState.petEmail}
                onChange={handleChange}
              />
            </div>
            <div className="AddPetDescription">
              <label htmlFor="petDescription">Description:</label>
              <textarea
                className="AddPetDescriptionInputField"
                name="petDescription"
                value={formState.petDescription}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="AddPetBtnContainer">
          <button onClick="location.href='/'" className="AddPetBtn" type="submit">Add Pet</button>
          <Link to="/" className="AddPetBtn">Home</Link>
        </div> 
      </form>
    </div>
  </div>
);
}

export default AddPetForm;