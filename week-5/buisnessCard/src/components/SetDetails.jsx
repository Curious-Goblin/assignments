import { useState } from "react";
import PropTypes from 'prop-types';

export function SetDetails({updateState}){
    const [description, setDescription] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [gitHub, setGitHub] = useState("")
    const [interests, setInterests] = useState("")
    const [array,setArray]=useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newArray = interests.split(',').map(value => value.trim());
        setArray(newArray);
      };

    return <div>
        <input type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value
            setDescription(value)
        }}></input>
        <input type="text" placeholder="linkedIn" onChange={function (e) {
            const value = e.target.value
            setLinkedIn(value)
        }}></input>
        <input type="text" placeholder="gitHub" onChange={function (e) {
            const value = e.target.value
            setGitHub(value)
        }}></input>
        <input type="text" placeholder="interests" onChange={function (e) {
            const value = e.target.value
            setInterests(value)
        }}></input>
        <button onClick={handleFormSubmit}>Submit Interests</button>
        <button onClick={async ()=>{
            const response =await fetch('http://localhost:3000/user/details',{
                method:'PUT',
                body:JSON.stringify({
                    description:description,
                    linkedIn:linkedIn,
                    gitHub:gitHub,
                    interests:array
                }),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":localStorage.getItem('token')
                }
            })
            const json=await response.json()
            const username=json.username
            console.log(username);
            const newState={
                username:username,
                description:description,
                linkedIn:linkedIn,
                gitHub:gitHub,
                interests:array
            }
            updateState(newState)
        }}>SetDetails</button>
    </div>
}

SetDetails.propTypes = {
    updateState: PropTypes.func.isRequired
};