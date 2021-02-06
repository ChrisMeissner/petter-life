import React from 'react';
import './index.css';
import { useStoreContext } from "../../utils/GlobalState"
import { Link } from 'react-router-dom';

function SavedPets() {

    const { globalStore } = useStoreContext();

    return (
        <div className="SavedPetsSection">
            <div className="SavedPetContainer">
                <div className="SavedPetTitle">Your Saved Pets</div>
                    <div className="SavedPets">
                        { globalStore.user === null? <p>Loading</p>:
                        globalStore.user.likedPets.map(pet => (
                            <div className="SinglePetSaved" key={pet._id}>
                                <ul className="PetInfo">
                                    <li>{pet.name} - ({pet.type})</li>
                                    <li>Age: {pet.age} - {pet.gender}</li>
                                    <li>Location: {pet.location}</li>
                                    <li>Fixed: {pet.fixed}</li>
                                    <li>{pet.description}</li>
                                    <li>Interested in adopting {pet.name}? <br/> 
                                    Contact: {pet.petemail}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <Link to="/" className="CreateListingBtn">Home</Link>
            </div>
        </div>
    )
}

export default SavedPets;