import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_LIKED_PET } from '../../utils/mutations';
import { QUERY_PETS } from "../../utils/queries";
// import { getSavedPetIds } from '../../utils/localStorage';
import './index.css';


const PetList = ({ pets }) => {

    const { loading, data } = useQuery(QUERY_PETS);

    const [addLikedPet] = useMutation(ADD_LIKED_PET);


    if (!data) {
        return <p></p>
    }

    // create function to handle saving a pet to our database
    const handleLikedPet = async (petId) => {
        try {
            const { data } = await addLikedPet({
                variables: {
                  _id: petId
                },
            });
        }
        catch (error) {
            console.error(error);
        }
    };
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
                                <button
                                    // disabled={false}
                                    className='LikePetBtn'
                                    onClick={() => handleLikedPet(pet._id)}>
                                        Save Pet
                                </button>
                            </div>
                        ))}
                </div>
            <Link to="/addPetForm" className="CreateListingBtn">Create Listing</Link>
        </div>
    );
}

export default PetList;