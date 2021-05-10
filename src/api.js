import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import {setUsername, setID, getID, Userlogin,setUsertype} from "./components/CurrentUser"



// TODO - update this to be your url
//const BASE_URL = "https://digiceipttest.herokuapp.com";
 const BASE_URL = "https://animal-shape-project.herokuapp.com";
//const BASE_URL = "http://localhost:8000";
//const Font_URL = "http://localhost:3000";
const Font_URL = "https://animal-shape-front.herokuapp.com/";


export function getUsers() {
    const endpoint = BASE_URL + '/get-user';
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function getCertainUser(id) {
    const endpoint = BASE_URL + '/find-given-user/' + id;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });

}



export function addUser(user) {
    const { username, password, dogShow, dogOwner, pugOwner,workDog } = user;
    if (!username || !password || !dogShow || !dogOwner || !pugOwner ||! workDog) {
        alert("must include all fields");
        return;
    }

    const endpoint = BASE_URL + `/insert-user/`;

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({
            username,
            password,
            dogShow,
            dogOwner,
            pugOwner,
        workDog})
    })
        .then(res => {
            if(res.status === 400){
                alert("Username exists!");
            }
            else{
                  window.location.reload(true)
            }
        });
}

export function register(e, lg) {
    e.preventDefault();
    const username = document.getElementById('Username').value;
    const password = document.getElementById('password').value;
    const dogShow = document.getElementById('dogShow').value;
    const dogOwner = document.getElementById('dogOwner').value;
    const pugOwner = document.getElementById('pugOwner').value;
    const workDog = document.getElementById('workDog').value;
    const usertype = document.getElementById('usertype').value;
if (!username || !usertype || !password) {
        alert("Must include required fields");
        return;

    }





    let request = {
        username: username,
        password: password,
        dogShow: dogShow,
        dogOwner: dogOwner,
        pugOwner:pugOwner,
        workDog:workDog,
        usertype: usertype
    };

    const endpoint = BASE_URL + `/insert-user/`;

    axios.post(endpoint, request)
        .then(resp => {
            console.log(resp)
            if(resp.status === 400) {
                alert("Username exists!");
                let path = "/register";
                lg.setState({redirectState: true, path:path})
            }

            else{
                setID(resp.data);
                setUsername(username);
                setUsertype(usertype);
                Userlogin();
                let path = '/personalpage/' + resp.data;
                lg.setState({redirectState: true, path:path})
            }
        }).catch(err => {
        alert("Username exists! Please change username.");
        console.log(err);
        })
}

export function login(e, lg) {
    const endpoint = BASE_URL + '/user-login';
    e.preventDefault();
    let request = {
        username: document.getElementById('Username').value,
        password: document.getElementById('password').value,

    };
 //   alert(request.username + request.password);
    axios.post(endpoint, request)
        .then(resp => {
            if(resp.data.length > 0) {
                let userID = resp.data[0]['_id'];
                let username = resp.data[0]['username'];
                let usertype = resp.data[0]['usertype'];
                setID(userID);
                setUsername(username);
                setUsertype(usertype)
                Userlogin();
                console.log(getID())
                if(username === 'admin'){
                    let path = '/users'
                    lg.setState({redirectState: true, path: path});
                }else{
                    let path = '/personalpage/' + userID;
                    lg.setState({redirectState: true, path: path});
                }
            }
            else {
                setID("");
                alert("Username or password is incorrect.")
            }
            //Login.setPath(path);
        })
        .catch(err => {
            alert("Error.");
            console.log(err);
        })
}

export function updateUser(user) {
    const { _id, dogShow, dogOwner,pugOwner,workDog, username, password, usertype } = user;
    if (!_id) {
        alert("must include an id");
        return;
    }
    if (!dogOwner || !dogShow || !pugOwner ||workDog) {
        alert("must include a dogOwner, dog Show,pugOwner or workDog to update");
        return;
    }
    if (!username || !password) {
        alert("Invalid username or password submitted");
        return;
    }

    const endpoint = BASE_URL + `/update-user-info/${_id}`;

    // return fetch query to update an author
    return fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ _id,
            dogShow,
            dogOwner,
            pugOwner,
            workDog,
            username,
            password,
        usertype})
    })
        .then(res => window.location.reload(true));

}

export function deleteUser(id) {
    const endpoint = BASE_URL + '/delete-user';

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
        .then(res => window.location.reload(true));
}

export function useUsers() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers()
            .then(users => {
                setUsers(users);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        users,
        error
    };
}

export function getUserReceipt(id) {

    const endpoint = BASE_URL +'/userpage/list-user-receipt/' + id;

    return fetch(endpoint).then(res => {
        return res.json();
    });
}

export function UserReceipt(id) {
    const [loading, setLoading] = useState(true);
    const [receipts, setReceipts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUserReceipt(id)
            .then(receipts => {
                setReceipts(receipts['receipts']);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        receipts,
        error
    };
}

// Receipt api
export function getReceipt() {
    const endpoint = BASE_URL + '/get-receipt';
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function useReceipt() {
    const [loading, setLoading] = useState(true);
    const [receipts, setReceipts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getReceipt()
            .then(receipts => {
                setReceipts(receipts);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        receipts,
        error
    };
}

export function updateReceipt(receipt) {
    const { _id, category } = receipt;
    if (!_id) {
        alert("must include an id");
        return;
    }
    if (!category) {
        alert("must include a category to update");
        return;
    }

    const endpoint = BASE_URL + `/update-receipt`;

    // return fetch query to update an author
    return fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ _id,
            category })
    })
        .then(res => {
            if(res.status === 400){
                alert("Update failed.")
            }else{
                window.location.reload(true);
            }
        });
}

export function deleteReceipt(id) {
    const endpoint = BASE_URL + '/delete-receipt';

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
        .then(res => window.location.reload(true));
}

export function deleteSurvey(id) {
    const endpoint = BASE_URL + '/delete-survey';

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
        .then(res => {if(res.status === 400){
        alert("Cannot ");
    }
    else{
        window.location.reload(true)
    }
})
}


export function addReceipt(receipt) {
    const { buyerID, shop, description, price, category, date } = receipt;
    if (!buyerID || !shop || !description || !price || !category|| !date) {
        alert("must include all fields");
        return;
    }

    const endpoint = BASE_URL + `/create-receipt`;

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({
            buyerID,
            shop,
            description,
            price,
            category,
            date
        })
    })
        .then(res => {
            if(res.status === 400){
                alert("Cannot create this receipt.");
            }
            else{
                window.location.reload(true)
            }
        });
}

export function budget(query){
    const { buyerID, startDate, endDate } = query;
    console.log(query);
    if (!buyerID||!startDate || !endDate) {
        alert("Please login from main page");
        return;
    }

    const endpoint = BASE_URL + '/userpage/list-user-receipt-bydate/' + buyerID + '/' + startDate + '/' + endDate;

    return fetch(endpoint)
        .then(res => {
            console.log(res);
            return res.json()});
}



export function createSurvey(state) {
    console.log("11111")
    const { username,usertype,Muzzle1,Muzzle2,Muzzle3,Muzzle4,Muzzle5,Muzzle6,Muzzle7,Muzzle8,Muzzle9,Muzzle10,Wrinkle10,Wrinkle9,Wrinkle8
        ,Wrinkle7 ,Wrinkle6,Wrinkle5,Wrinkle4,Wrinkle3,Wrinkle2, Wrinkle1,Nostril10,Nostril9,Nostril8,Nostril7,Nostril6,Nostril5,Nostril4,Nostril3,Nostril2,Nostril1} = state;
    const endpoint = BASE_URL + '/submit-survey';

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ username,usertype,Muzzle1,Muzzle2,Muzzle3,Muzzle4,Muzzle5,Muzzle6,Muzzle7,Muzzle8,Muzzle9,Muzzle10,Wrinkle10,Wrinkle9,Wrinkle8
            ,Wrinkle7 ,Wrinkle6,Wrinkle5,Wrinkle4,Wrinkle3,Wrinkle2,
            Wrinkle1,Nostril10,Nostril9,Nostril8,Nostril7,Nostril6,Nostril5,Nostril4,Nostril3,Nostril2,Nostril1 })
    })
        .then(res => {
            if(res.status === 400){
                alert("Cannot create this result.");
            }
            else{
                window.location=Font_URL+'/finish';
            }
        });
}

export function getSurvey() {
    const endpoint = BASE_URL + '/get-Survey';
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function useSurvey() {
    const [loading, setLoading] = useState(true);
    const [surveys, setSurveys] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSurvey()
            .then(surveys => {
                setSurveys(surveys);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        surveys,
        error
    };
}

