import React from 'react';
import './index.css';
import { useStoreContext } from "../../utils/GlobalState"
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_LIKED_PET } from '../../utils/mutations';


function SavedPets() {

    const { globalStore } = useStoreContext();
    const [deleteLikedPet] = useMutation(DELETE_LIKED_PET);


    // function to delete pet from Saved Pets
    const deletePetHandler = async (petId) => {
        try {
            const result = await deleteLikedPet({
                variables: {
                    _id: petId
                },
            });
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="SavedPetsSection">
            <div className="SavedPetContainer">
                <div className="SavedPetTitle">Your Saved Pets</div>
                <div className="SavedPets">
                    {globalStore.user === null ? <p>Loading</p> :
                        globalStore.user.likedPets.map(pet => (
                            <div className="SinglePetSaved" key={pet._id}>
                                <ul className="PetInfo">
                                    <li>{pet.name} - ({pet.type})</li>
                                    <li>Age: {pet.age} - {pet.gender}</li>
                                    <li>Location: {pet.location}</li>
                                    <li>Fixed: {pet.fixed}</li>
                                    <li>{pet.description}</li>
                                    <li>Interested in adopting {pet.name}? <br />
                                    Contact: {pet.petemail}</li>
                                    <button
                                        className='DeletePetBtn'
                                        onClick={() => deletePetHandler(pet._id)}>
                                    Delete Pet</button>
                                </ul>
                            </div>
                        ))}
                </div>
                <Link to="/" className="CreateListingBtn">Home</Link>
            </div>
        </div>
    )
};

export default SavedPets;