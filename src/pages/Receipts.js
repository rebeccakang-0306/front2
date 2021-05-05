{/*import React, { useState } from "react";
import {useReceipt, updateReceipt, deleteReceipt, useSurvey, deleteSurvey} from "../api";

import Button from "../components/Button";
import AddReceipt from "../components/AddReceipt";
import AddSurvey from "../pages/PersonalReceipts";
import '../styles/Users.css';
import {ReceiptTable} from "../components/ReceiptTable";
import {UserExtend} from "./Users";
export default function Receipts() {
    const { loading, surveys, error } = useSurvey();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    // use this to make sure you are getting the right data
    console.log(surveys);

    // Display a list of the receipts
    return (
        <div>
            <h1>Survey Result</h1>
            <ReceiptTable/>
        </div>
    );
}

export function Receipt(receipt) {
    const { _id } = receipt;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`user user-${_id}`} key={_id}>
            <div className="info">
                <Button className={"btn-danger"} onClick={() => deleteSurvey(_id)}>
                    Delete
                </Button>
            </div>
            <ReceiptExtended {...receipt} showUpdate={showUpdate} />
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

export function ReceiptExtended(props) {
    const { _id, category, showUpdate } = props;

    const [id_input, setId] = useState(_id);
    const [category_input, setCategory] = useState(category);

    function onSubmit() {
        //call upate receipt function
        updateReceipt({
            _id: id_input,
            category: category_input
        })
    }

    return (
        <div className={`author-expand ${showUpdate ? "show" : ""}`}>
            <form>


            </form>

        </div>
    );
}

*/}

import React, { useState } from "react";
import {useReceipt, updateReceipt, deleteReceipt} from "../api";

import Button from "../components/Button";
import AddReceipt from "../components/AddReceipt";
import AddSurvey from "../pages/PersonalReceipts";
import '../styles/Users.css';
import {ReceiptTable} from "../components/ReceiptTable";
export default function Receipts() {
    const { loading, receipts, error } = useReceipt();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    // use this to make sure you are getting the right data
    console.log(receipts);

    // Display a list of the receipts
    return (
        <div>
            <h1>Survey Result</h1>
            <AddSurvey/>
            <ReceiptTable/>
        </div>
    );
}

export function Receipt(receipt) {
    const { _id } = receipt;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`user user-${_id}`} key={_id}>
            <div className="info">
                <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
                    {showUpdate ? "-" : "+"}
                </Button>
            </div>
            <ReceiptExtended {...receipt} showUpdate={showUpdate} />
        </div>
    );
}

export function ReceiptExtended(props) {
    const { _id, category, showUpdate } = props;

    const [id_input, setId] = useState(_id);
    const [category_input, setCategory] = useState(category);

    function onSubmit() {
        //call upate receipt function
        updateReceipt({
            _id: id_input,
            category: category_input
        });
    }

    return (
        <div className={`author-expand ${showUpdate ? "show" : ""}`}>
            <form>
                {/* TODO - add value and onChange properties to inputs */}
                <input type="text" name="category_input" value = {category_input} onChange={event => { setCategory(event.target.value);}}/>
                <Button className={"btn-danger"} onClick={() => deleteReceipt(_id)}>
                    Delete
                </Button>
            </form>

        </div>
    );
}

