import React ,{ useState }from "react";

import { addUser } from "../api";
import Button from "../components/Button";

export default function Adduser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dogShow, setDogShow] = useState("");
    const [dogOwner, setDogOwner] = useState("");
    const [pugOwner, setPugOwner] = useState("");
    const [workDog, setWorkDog] = useState("");
    const [usertype, setUserType] = useState("");

    function onSubmit() {
        addUser({
          username,
          password,
          dogShow,
          dogOwner,
            pugOwner,
            workDog,
            usertype
        });
    }

    return (
        <div className="addAuthor">
            Add New User
            <form>
                <input
                    className="input1"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={event => {
                      setUsername(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={event => {
                      setPassword(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Whether you participate in dog competition"
                    name="dogshow"
                    value={dogShow}
                    onChange={event => {
                      setDogShow(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Whether you own a dog"
                    name="dogowner"
                    value={dogOwner}
                    onChange={event => {
                      setDogOwner(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Whether you own a pug"
                    name="pugowner"
                    value={dogOwner}
                    onChange={event => {
                        setPugOwner(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Whether you work with dog"
                    name="workdog"
                    value={dogOwner}
                    onChange={event => {
                        setWorkDog(event.target.value);
                    }}
                />


                <select className="usertype4"  onChange={event => {
                    setUserType(event.target.value);
                }}>
                <option value="" disabled selected>User Type</option>
                    <option value="Vet">Vet</option>
                    <option value="Public">Public</option>
                    <option value="Dog Breeder">Dog Breeder</option>

                </select>

                {/*
                <input
                    type="text"
                    placeholder="Vet,Dog Owner or Dog Breeder"
                    name="usertype"
                    value={usertype}
                    onChange={event => {
                        setUserType(event.target.value);
                    }}
                />
                */}
                <Button className={"btn-success"} onClick={onSubmit}>
                    Add
                </Button>
            </form>
        </div>
    );
}
