import React, { useState } from "react";
import {useUsers, deleteUser, updateUser} from "../api";

import Button from "../components/Button";
import Adduser from "../components/Adduser";

import '../styles/Users.css';
import {UserTable} from "../components/UserTable";

export default function Users() {
    const { loading, users, error } = useUsers();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    // use this to make sure you are getting the right data
    console.log(users);

    // Display a list of the users and update function
    return (
        <div>
            <h1>User Management</h1>
            <Adduser/>
            <UserTable/>
        </div>
    );
}

export function User(user) {
    const { _id } = user;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`user user-${_id}`} key={_id}>
            <div className="info">
                <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
                    {showUpdate ? "-" : "+"}
                </Button>
            </div>
            <UserExtend {...user} showUpdate={showUpdate} />
        </div>
    );
}


export function UserExtend(props) {
    const { _id, dogShow, dogOwner, pugOwner, workDog, username,password, usertype, showUpdate } = props;

    const [id_input, setId] = useState(_id);
    const [show_input, setDogShow] = useState(dogShow);
    const [owner_input, setDogOwner] = useState(dogOwner);
    const [pug_input, setPugOwner] = useState(pugOwner);
    const [work_input, setWorkDog] = useState(workDog);
    const [username_input, setUsername] = useState(username);
    const [password_input, setPassword] = useState(password);
    /* 1 */
    const [usertype_input, setUserType] = useState(usertype);


    function onSubmit() {
        //call update author function
        updateUser({
            _id: id_input,
            dogShow: show_input,
            dogOwner: owner_input,
            pugOwner: pug_input,
            workDog: work_input,
            username: username_input,
            password:password_input,
            usertype:usertype_input
        });
    }

    return (
        <div className={`author-expand ${showUpdate ? "show" : ""}`}>
            <form className={'update-form'}>
                {/* TODO - add value and onChange properties to inputs */}
                <input type="text" name="dog_show" value = {show_input} onChange={event => {setDogShow(event.target.value);}}/>
                <input type="text" name="dog_owner" value = {owner_input} onChange={event => { setDogOwner(event.target.value);}}/>
                <input type="text" name="pug_owner" value = {pug_input} onChange={event => { setPugOwner(event.target.value);}}/>

                <input type="text" name="work_dog" value = {work_input} onChange={event => { setWorkDog(event.target.value);}}/>

                <input type="text" name="username" value = {username_input} onChange={event => { setUsername(event.target.value);}}/>
                <select className={"usertype5"} name = "user_type" value = {usertype_input} onChange={event => { setUserType(event.target.value);}}>
                    <option value="Vet">Vet</option>
                    <option value="Public">Public</option>
                    <option value="Dog Breeder">Dog Breeder</option>
                </select>
            </form>
            <Button
                className={"btn-warning"} onClick={onSubmit}>Update
            </Button>
            <Button className={"btn-danger"} onClick={() => deleteUser(_id)}>
                Delete
            </Button>
        </div>
    );
}
