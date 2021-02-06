import React from 'react';
import './index.css';
import { useStoreContext } from "../../utils/GlobalState"
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_LIKED_PET } from '../../utils/mutations';
import { QUERY_PETS, QUERY_ME } from '../../utils/queries';



function SavedPets() {
    const { globalStore } = useStoreContext();

    const [deleteLikedPet] = useMutation(DELETE_LIKED_PET, {

        update(cache, { data: { deleteLikedPet } }) {
            // read what's currently in the cache
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });

                // pull the pet from user array
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: [deleteLikedPet, ...me] }
                });

            } catch (e) {
                console.error(e);
            }

            //update logged in user's cache, deleting pet from array
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, likedPets: [...me.likedPets, deleteLikedPet] } }
            });
        }
    });


    // function to delete pet from Saved Pets
    const deletePetHandler = async (petId) => {
        try {
            const result = await deleteLikedPet({
                variables: {
                    _id: petId
                },
            });
        }
        catch (error) {
            console.error(error);
        }
    };

    console.log('Global Store', globalStore);

    return (
        <div className="SavedPetsSection">
            <div className="SavedPetContainer">
                <div className="SavedPetTitle">Your Saved Pets</div>
                <div className="SavedPets">
                    {globalStore.user === null ? <p>Loading</p> :
                        // globalStore.user.likedPets.length === 0 ? <p>You have no saved pets. Check out available pets on the homepage.</p> :
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
                        ))
                    }
                </div>
                <Link to="/" className="CreateListingBtn">Home</Link>
            </div>
        </div>
    )
};

export default SavedPets;