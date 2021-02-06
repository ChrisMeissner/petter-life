import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_LIKED_PET, DELETE_LIKED_PET } from '../../utils/mutations';
import { QUERY_PETS, QUERY_ME } from "../../utils/queries";
import './index.css';


const PetList = ({ pets }) => {

    const { loading, data } = useQuery(QUERY_PETS, QUERY_ME);
    const [addLikedPet] = useMutation(ADD_LIKED_PET);
    const [deleteLikedPet] = useMutation(DELETE_LIKED_PET);

    // const [petState, setPetState] = useState({ liked: false });

    if (!data) {
        return <p></p>
    }

    // function to handle saving a pet to our database
    const handleSavePetButton = async (petId) => {

        // IF me.likedPet does not have petId, then add to user and change button text to "Unsave pet"
        try {
            await addLikedPet({
                variables: {
                  _id: petId
                },
            });
            // setPetState(!petState)
        }
        catch (error) {
            console.error(error);
        }
    };

        // ELSE me.likedPet DOES petId and user clicks it, they are trying to REMOVE, so await deleteLikedPet, and change button back to "Save Pet"
        // try {
        //     await deleteLikedPet({
        //         variables: {
        //             _id: petId
        //         },
        //     });
        //     catch (error) {
        //         console.error(error);
        //     }



    return (
        <div className="PetListingsContainer">
            <div className="AvailablePetsTitle">Pets available for adoption:</div>
                <div className="AvailablePetsContainer">
                        {!loading && data.pets.map(pet => (
                            <div className="SinglePetListings" key={pet._id}>
                                <ul className="PetInfo">
                                    <li>{pet.name} - ({pet.type})</li>
                                    <li>Age: {pet.age} - {pet.gender}</li>
                                    <li>Location: {pet.location}</li>
                                    <li>Fixed: {pet.fixed}</li>
                                    <li>{pet.description}</li>
                                    <li>Interested in adopting {pet.name}?</li>
                                    <li>Contact: {pet.petemail}</li>
                                </ul>
                                {/* {!petState ? (
                            <button className="LikePetBtn" key={pet._id} onClick={() => handleLikedPet(pet._id)}>Unsave this Pet</button>
                        ) : ( */}
                            <button className="LikePetBtn" key={pet._id} onClick={() => handleSavePetButton(pet._id)}>Save this Pet</button>
                        {/* )} */}
                            </div>
                        ))}
                </div>
            <Link to="/addPetForm" className="CreateListingBtn">Create Listing</Link>
        </div>
    );
}

export default PetList;