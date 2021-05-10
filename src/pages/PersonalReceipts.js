import React from 'react'
import Button from '@material-ui/core/Button';
import  "../styles/NewNav.css"
import {updateUser} from "../api";

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import {useUsers, deleteUser, createSurvey} from "../api.js";

import Adduser from "../components/Adduser";

import '../styles/Home.css';
import {UserTable} from "../components/UserTable";
import {getID, getUsername, getUsertype} from "../components/CurrentUser";
import Image from "react-bootstrap/Image";

import a1 from '../assets/d1.png'
import a2 from '../assets/d2.png'
import a3 from '../assets/d3.png'
import a4 from '../assets/d4.png'
import a5 from '../assets/d5.png'
import a6 from '../assets/d6.png'
import a7 from '../assets/d7.png'
import a8 from '../assets/d8.png'
import a9 from '../assets/d9.png'
import a10 from '../assets/d10.png'


import c1 from '../assets/do1.png'
import c2 from '../assets/do2.png'
import c3 from '../assets/do3.png'
import c4 from '../assets/do4.png'
import c5 from '../assets/do5.png'
import c6 from '../assets/do6.png'
import c7 from '../assets/do7.png'
import c8 from '../assets/do8.png'
import c9 from '../assets/do9.png'
import c10 from '../assets/do10.png'


import t1 from '../assets/dog1.jpg'
import t2 from '../assets/dog2.png'
import t3 from '../assets/dog3.png'
import t4 from '../assets/dog4.png'
import t5 from '../assets/dog5.png'
import t6 from '../assets/dog6.png'
import t7 from '../assets/dog7.png'
import t8 from '../assets/dog8.png'
import t9 from '../assets/dog9.png'
import t10 from '../assets/dog10.png'


var arr = [];
var img;
var picture = []
function getNumNoRepeat() {


    do {
        if (picture.length === 6) {
            return {picture,arr}

        } else {
            var num = Math.floor(Math.random() * 10) + 1;
                  if (-1 === arr.indexOf(num)) {//数组中不存在
                if (num === 1) {
                    img = "/static/media/" + "dog" + num + ".9f8c8ea7.jpg";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 2) {
                    img = "/static/media/" + "dog" + num + ".e28ac6e3.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 3) {
                    img = "/static/media/" + "dog" + num + ".3e9f3f5e.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 4) {
                    img = "/static/media/" + "dog" + num + ".3723ec8f.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 5) {
                    img = "/static/media/" + "dog" + num + ".57ce048e.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 6) {
                    img = "/static/media/" + "dog" + num + ".ba65919b.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 7) {
                    img = "/static/media/" + "dog" + num + ".983c3440.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 8) {
                    img = "/static/media/" + "dog" + num + ".2748f7db.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 9) {
                    img = "/static/media/" + "dog" + num + ".862a0f5c.png";
                    picture.push(img)

                    arr.push(num);
                }
                else if (num === 10) {
                    img = "/static/media/" + "dog" + num + ".cb45900d.png";
                    picture.push(img)

                    arr.push(num);
                }

                }


        }
    }
    while (true) ;
}

var random = getNumNoRepeat();
var order = random.arr;
console.log(random)
var dog1 = random.picture[0].toString()
var dog2 = random.picture[1].toString()
var dog3 = random.picture[2].toString()
var dog4 = random.picture[3].toString()
var dog5 = random.picture[4].toString()
var dog6 = random.picture[5].toString()




var arr1 = [];
var img1;
var picture1 = []
function getNumNoRepeat1() {

    do {
        if (picture1.length === 6) {
            return {picture1,arr1}

        } else {
            var num1 = Math.floor(Math.random() * 10) + 1;
            if (!arr1.includes(num1)) {//数组中不存在
                if (num1 === 1) {
                    img1 = "/static/media/" + "d" + num1 + ".c1178f21.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 2) {
                    img1= "/static/media/" + "d" + num1 + ".d3402512.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 3) {
                    img1 = "/static/media/" + "d" + num1 + ".a211c85a.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 4) {
                    img1 = "/static/media/" + "d" + num1 + ".b36b4518.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 5) {
                    img1 = "/static/media/" + "d" + num1 + ".42328ce4.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 6) {
                    img1 = "/static/media/" + "d" + num1 + ".26f3f651.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 7) {
                    img1 = "/static/media/" + "d" + num1 + ".d3204083.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 8) {
                    img1 = "/static/media/" + "d" + num1 + ".f859895d.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 9) {
                    img1 = "/static/media/" + "d" + num1 + ".90a14811.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }
                else if (num1 === 10) {
                    img1 = "/static/media/" + "d" + num1 + ".19c6ff1b.png";
                    picture1.push(img1)

                    arr1.push(num1);
                }

            }


        }
    }
    while (true) ;
}

var random1 = getNumNoRepeat1();
var order1 = random1.arr1;
console.log(random1)
var d1 = random1.picture1[0].toString()
var d2 = random1.picture1[1].toString()
var d3 = random1.picture1[2].toString()
var d4 = random1.picture1[3].toString()
var d5 = random1.picture1[4].toString()
var d6 = random1.picture1[5].toString()





var arr2 = [];
var img2;
var picture2 = []
function getNumNoRepeat2() {

    do {
        if (picture2.length === 6) {
            return {picture2,
                arr2}

        } else {
            var num2 = Math.floor(Math.random() * 10) + 1;
            if (!arr2.includes(num2)) {//数组中不存在
                if (num2 === 1) {
                    img2 = "/static/media/" + "do" + num2+ ".0a46b828.png";
                    picture2.push(img2)
                    arr2.push(num2);
                }
                else if (num2 === 2) {
                    img2= "/static/media/" + "do" + num2 + ".cb9fc5b4.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 3) {
                    img2 = "/static/media/" + "do" + num2 + ".62a63df1.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 4) {
                    img2 = "/static/media/" + "do" + num2 + ".569f1413.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 5) {
                    img2 = "/static/media/" + "do" + num2 + ".715d0f74.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 6) {
                    img2 = "/static/media/" + "do" + num2 + ".4672e013.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 7) {
                    img2 = "/static/media/" + "do" + num2 + ".37e14488.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 8) {
                    img2 = "/static/media/" + "do" + num2 + ".05e7e3e1.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 9) {
                    img2 = "/static/media/" + "do" + num2 + ".2545ff5a.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }
                else if (num2 === 10) {
                    img2 = "/static/media/" + "do" + num2 + ".21304fdf.png";
                    picture2.push(img2)

                    arr2.push(num2);
                }

            }


        }
    }
    while (true) ;
}

var random2 = getNumNoRepeat2();
var order2 = random2.arr2;
console.log(random2)
var do1 = random2.picture2[0].toString()
var do2 = random2.picture2[1].toString()
var do3 = random2.picture2[2].toString()
var do4 = random2.picture2[3].toString()
var do5 = random2.picture2[4].toString()
var do6 = random2.picture2[5].toString()






function onSubmit(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18) {
    var newarray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    newarray[order[0]-1] = v1;
    newarray[order[1]-1] = v2;
    newarray[order[2]-1] = v3;
    newarray[order[3]-1] = v4;
    newarray[order[4]-1] = v5;
    newarray[order[5]-1] = v6;
    newarray[9+order1[0]] = v7;
    newarray[9+order1[1]] = v8;
    newarray[9+order1[2]] = v9;
    newarray[9+order1[3]] = v10;
    newarray[9+order1[4]] = v11;
    newarray[9+order1[5]] = v12;
    newarray[19+order2[0]] = v13;
    newarray[19+order2[1]] = v14;
    newarray[19+order2[2]] = v15;
    newarray[19+order2[3]] = v16;
    newarray[19+order2[4]] = v17;
    newarray[19+order2[5]] = v18;

    createSurvey({
          //  userid:getID(),
          username: getUsername(),
            usertype: getUsertype(),
            Muzzle1: newarray[0],
            Muzzle2: newarray[1],
            Muzzle3: newarray[2],
            Muzzle4: newarray[3],
            Muzzle5: newarray[4],
            Muzzle6: newarray[5],
            Muzzle7: newarray[6],
            Muzzle8: newarray[7],
            Muzzle9: newarray[8],
            Muzzle10: newarray[9],
            Wrinkle10: newarray[10],
            Wrinkle9: newarray[11],
            Wrinkle8: newarray[12],
            Wrinkle7: newarray[13],
            Wrinkle6: newarray[14],
            Wrinkle5: newarray[15],
            Wrinkle4: newarray[16],
            Wrinkle3: newarray[17],
            Wrinkle2: newarray[18],
            Wrinkle1: newarray[19],
            Nostril10: newarray[20],
            Nostril9: newarray[21],
            Nostril8: newarray[22],
            Nostril7: newarray[23],
            Nostril6: newarray[24],
            Nostril5: newarray[25],
            Nostril4: newarray[26],
            Nostril3: newarray[27],
            Nostril2: newarray[28],
            Nostril1: newarray[29],
        }

        )
}



const labels = {
    0.5: 'Dislike',
    1: 'Dislike+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles({
    root: {
        alignItems: 'center',
    },
});

export default function HoverRating() {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    const [value0, setValue0] = React.useState(0);
    const [hover0, setHover0] = React.useState(-1);


    const [value1, setValue1] = React.useState(0);
    const [hover1, setHover1] = React.useState(-1);

    const [value2, setValue2] = React.useState(0);
    const [hover2, setHover2] = React.useState(-1);

    const [value3, setValue3] = React.useState(0);
    const [hover3, setHover3] = React.useState(-1);

    const [value4, setValue4] = React.useState(0);
    const [hover4, setHover4] = React.useState(-1);

    const [value5, setValue5] = React.useState(0);
    const [hover5, setHover5] = React.useState(-1);

    const [value6, setValue6] = React.useState(0);
    const [hover6, setHover6] = React.useState(-1);


    const [value7, setValue7] = React.useState(0);
    const [hover7, setHover7] = React.useState(-1);

    const [value8, setValue8] = React.useState(0);
    const [hover8, setHover8] = React.useState(-1);


    const [value9, setValue9] = React.useState(0);
    const [hover9, setHover9] = React.useState(-1);


    const [value10, setValue10] = React.useState(0);
    const [hover10, setHover10] = React.useState(-1);



    const [value11, setValue11] = React.useState(0);
    const [hover11, setHover11] = React.useState(-1);


    const [value12, setValue12] = React.useState(0);
    const [hover12, setHover12] = React.useState(-1);


    const [value13, setValue13] = React.useState(0);
    const [hover13, setHover13] = React.useState(-1);


    const [value14, setValue14] = React.useState(0);
    const [hover14, setHover14] = React.useState(-1);

    const [value15, setValue15] = React.useState(0);
    const [hover15, setHover15] = React.useState(-1);


    const [value16, setValue16] = React.useState(0);
    const [hover16, setHover16] = React.useState(-1);


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={"pics6"}>
                <h1>Survey</h1>

                <div id="status3_pics">
                    <ul className={"pics6_status3"}>
                        <li>


                            <Image id="1" className="status3-pic" height="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>
                                   src =  {dog1} />
                               <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                            />

                                {value !== null && <Box id= 'box1' ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                        </li>
                        <li>

                            <Image id="1" className="status3-pic" //height="400" width="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>
                                   src = {dog2}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback1"
                                value={value0}
                                precision={0.5}
                                onChange={(event0, newValue0) => {
                                    setValue0(newValue0);
                                }}
                                onChangeActive={(event0, newHover0) => {
                                    setHover0(newHover0);
                                }}
                            />
                            {value0 !== null && <Box id= 'box1' ml={2}>{labels[hover0 !== -1 ? hover0 : value0]}</Box>}
                        </li>

                        <li>

                            <img id="2" className="status3-pic" height="400"
                                 //src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1541213992,76400213&fm=26&gp=0.jpg"/>
                                 src = {dog3}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                                <Rating
                                    name="hover-feedback2"
                                    value={value1}
                                    precision={0.5}
                                    onChange={(event1, newValue1) => {
                                        setValue1(newValue1);
                                    }}
                                    onChangeActive={(event1, newHover1) => {
                                        setHover1(newHover1);
                                    }}
                                />
                                {value1 !== null && <Box ml={2}>{labels[hover1 !== -1 ? hover1 : value1]}</Box>}
                        </li>

                        <li>

                            <Image id="1" className="status3-pic" height="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                   src = {dog4}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback3"
                                value={value2}
                                precision={0.5}
                                onChange={(event10, newValue2) => {
                                    setValue2(newValue2);
                                }}
                                onChangeActive={(event2, newHover2) => {
                                    setHover2(newHover2);
                                }}
                            />
                            {value2 !== null && <Box id= 'box1' ml={2}>{labels[hover2 !== -1 ? hover2 : value2]}</Box>}
                        </li>
                        <li>

                            <img id="3" className="status3-pic" height="400"
                                 //src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1867263544,2857916448&fm=26&gp=0.jpg"/>
                                 src = {dog5}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback4"
                                value={value3}
                                precision={0.5}
                                onChange={(event3, newValue3) => {
                                    setValue3(newValue3);
                                }}
                                onChangeActive={(event3, newHover3) => {
                                    setHover3(newHover3);
                                }}
                            />
                            {value3 !== null && <Box ml={2}>{labels[hover3 !== -1 ? hover3 : value3]}</Box>}
                        </li>
                        <li>

                            <Image id="1" className="status3-pic" height="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                   src = {dog6}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback5"
                                value={value4}
                                precision={0.5}
                                onChange={(event4, newValue4) => {
                                    setValue4(newValue4);
                                }}
                                onChangeActive={(event4, newHover4) => {
                                    setHover4(newHover4);
                                }}
                            />

                            {value4 !== null && <Box id= 'box1' ml={2}>{labels[hover4 !== -1 ? hover4 : value4]}</Box>}

                        </li>

                    </ul>
                </div>
                <div id="status3_pics">
                    <ul className="pics6_status3">
                        <li>

                            <img id="4" className="status3-pic" height="400"
                                 //src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2219225502,1868692565&fm=26&gp=0.jpg"/>
                                 src = {d1}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback6"
                                value={value5}
                                precision={0.5}
                                onChange={(event5, newValue5) => {
                                    setValue5(newValue5);
                                }}
                                onChangeActive={(event5, newHover5) => {
                                    setHover5(newHover5);
                                }}
                            />
                            {value5 !== null && <Box id= 'box1' ml={2}>{labels[hover5 !== -1 ? hover5 : value5]}</Box>}
                        </li>
                        <li>

                            <Image id="1" className="status3-pic" height="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                   src = {d2}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback7"
                                value={value6}
                                precision={0.5}
                                onChange={(event6, newValue6) => {
                                    setValue6(newValue6);
                                }}
                                onChangeActive={(event6, newHover6) => {
                                    setHover6(newHover6);
                                }}
                            />
                            {value6 !== null && <Box id= 'box1' ml={2}>{labels[hover6 !== -1 ? hover6 : value6]}</Box>}

                        </li>

                        <li>


                            <img id="5" className="status3-pic" height="400"
                                 //src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=979862297,3441058921&fm=26&gp=0.jpg"/>
                            src = {d3}/>
                            <div className={"small"}>How ideal do you think this dog?</div>


                            <Rating
                                name="hover-feedback8"
                                value={value7}
                                precision={0.5}
                                onChange={(event7, newValue7) => {
                                    setValue7(newValue7);
                                }}
                                onChangeActive={(event7, newHover7) => {
                                    setHover7(newHover7);
                                }}
                            />
                            {value7 !== null && <Box ml={2}>{labels[hover7 !== -1 ? hover7 : value7]}</Box>}
                        </li>
                        <li>

                            <Image id="1" className="status3-pic" height="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                   src = {d4}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback9"
                                value={value8}
                                precision={0.5}
                                onChange={(event8, newvalue8) => {
                                    setValue8(newvalue8);
                                }}
                                onChangeActive={(event8, newhover8) => {
                                    setHover8(newhover8);
                                }}
                            />
                            {value8 !== null && <Box id= 'box1' ml={2}>{labels[hover8 !== -1 ? hover8 : value8]}</Box>}


                        </li>


                        <li>



                            <img id="6" className="status3-pic" height="400"
                                 //src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477240067,1549523397&fm=26&gp=0.jpg"/>
                                 src = {d5}/>
                            <div className={"small"}>How ideal do you think this dog?</div>


                            <Rating
                                name="hover-feedback10"
                                value={value9}
                                precision={0.5}
                                onChange={(event9, newValue9) => {
                                    setValue9(newValue9);
                                }}
                                onChangeActive={(event9, newHover9) => {
                                    setHover9(newHover9);
                                }}
                            />
                            {value9 !== null && <Box ml={2}>{labels[hover9 !== -1 ? hover9 : value9]}</Box>}
                        </li>
                        <li>

                            <Image id="1" className="status3-pic" height="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                   src = {d6}/>
                            <div className={"small"}>How ideal do you think this dog?</div>
                            <Rating
                                name="hover-feedback11"
                                value={value10}
                                precision={0.5}
                                onChange={(event10, newValue10) => {
                                    setValue10(newValue10);
                                }}
                                onChangeActive={(event10, newHover10) => {
                                    setHover10(newHover10);
                                }}
                            />
                            {value10 !== null && <Box id= 'box1' ml={2}>{labels[hover10 !== -1 ? hover10 : value10]}</Box>}

                        </li>
                    </ul>
                </div>

           <div id="status3_pics">
                <ul className="pics6_status3">
                                <li>

                                    <img id="7" className="status3-pic" height="400"
                                        // src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=916075890,1662056472&fm=11&gp=0.jpg"/>
                                         src = {do1}/>
                                    <div className={"small"}>How ideal do you think this dog?</div>

                                    <Rating
                                        name="hover-feedback12"
                                        value={value11}
                                        precision={0.5}
                                        onChange={(event11, newValue11) => {
                                            setValue11(newValue11);
                                        }}
                                        onChangeActive={(event11, newHover11) => {
                                            setHover11(newHover11);
                                        }}
                                    />
                                    {value11 !== null && <Box ml={2}>{labels[hover11 !== -1 ? hover11 : value11]}</Box>}
                                </li>

                                <li>

                                    <Image id="1" className="status3-pic" height="400"
                                        // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                           src = {do2}/>
                                    <div className={"small"}>How ideal do you think this dog?</div>
                                    <Rating
                                        name="hover-feedback13"
                                        value={value12}
                                        precision={0.5}
                                        onChange={(event12, newValue12) => {
                                            setValue12(newValue12);
                                        }}
                                        onChangeActive={(event12, newHover12) => {
                                            setHover12(newHover12);
                                        }}
                                    />
                                    {value12 !== null && <Box id= 'box1' ml={2}>{labels[hover12 !== -1 ? hover12 : value12]}</Box>}

                                </li>



                                <li>

                                    <img id="8" className="status3-pic" height="400"
                                        // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2870177897,1063334582&fm=26&gp=0.jpg"/>
                                         src = {do3}/>
                                    <div className={"small"}>How ideal do you think this dog?</div>


                                    <Rating
                                        name="hover-feedback14"
                                        value={value13}
                                        precision={0.5}
                                        onChange={(event13, newValue13) => {
                                            setValue13(newValue13);
                                        }}
                                        onChangeActive={(event13, newHover13) => {
                                            setHover13(newHover13);
                                        }}
                                    />
                                    {value13 !== null && <Box ml={2}>{labels[hover13 !== -1 ? hover13 : value13]}</Box>}
                                </li>
                                <li>

                                    <Image id="1" className="status3-pic" height="400"
                                        // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>
                                           src = {do4}/>
                                    <div className={"small"}>How ideal do you think this dog?</div>
                                    <Rating
                                        name="hover-feedback15"
                                        value={value14}
                                        precision={0.5}
                                        onChange={(event14, newValue14) => {
                                            setValue14(newValue14);
                                        }}
                                        onChangeActive={(event14, newHover14) => {
                                            setHover14(newHover14);
                                        }}
                                    />
                                    {value14 !== null && <Box id= 'box1' ml={2}>{labels[hover14 !== -1 ? hover14 : value14]}</Box>}


                                </li>


                                <li>

                                    <img id="9" className="status3-pic" height="400"
                                         //src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1911301903,2982696630&fm=26&gp=0.jpg"/>
                                         src = {do5}/>
                                    <div className={"small"}>How ideal do you think this dog?</div>


                                    <Rating
                                        name="hover-feedback16"
                                        value={value15}
                                        precision={0.5}
                                        onChange={(event15, newValue15) => {
                                            setValue15(newValue15);
                                        }}
                                        onChangeActive={(event15, newHover15) => {
                                            setHover15(newHover15);
                                        }}
                                    />
                                    {value15 !== null && <Box ml={2}>{labels[hover15 !== -1 ? hover15 : value15]}</Box>}
                                </li>
                                <li>

                                    <Image id="1" className="status3-pic" height="400"
                                        // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                           src = {do6}/>
                                    <div className={"small"}>How ideal do you think this dog?</div>
                                    <Rating
                                        name="hover-feedback17"
                                        value={value16}
                                        precision={0.5}
                                        onChange={(event16, newValue16) => {
                                            setValue16(newValue16);
                                        }}
                                        onChangeActive={(event16, newHover16) => {
                                            setHover16(newHover16);
                                        }}
                                    />
                                    {value16 !== null && <Box id= 'box1' ml={2}>{labels[hover16 !== -1 ? hover16 : value16]}</Box>}

                                </li>
                            </ul>
                        </div>

                <div>
                <Button variant="contained" color = "primary" onClick={() => { onSubmit(value,value0,value1,value2,value3,value4,value5,value6,
                    value7,value8,value9,value10,value11,value12,value13,value14,value15,value16) }}>
                    Submit
                </Button>
                </div>
            </div>
        </div>
    );
}


{/*

export default

    class StarRating extends React.Component {


        static defaultProps = {
            canClick: true,
            rateNum: 5,
            handleSelectRate: null,
            rateValue: 0
        }


        constructor(props) {
            super(props)
            this.state = {
                rateValue: 0,
                rateArray: new Array(Number(props.rateNum)).fill(''),
                rateArray1: new Array(Number(props.rateNum)).fill(''),
                rateArray2: new Array(Number(props.rateNum)).fill(''),
                rate: new Array(Number(props.rateNum)).fill('')
            }
        }

        handleSelectRate(value) {
            if (!this.props.canClick) {
                return
            }
            this.setState({
                rateValue: value
            })
            this.props.handleSelectRate && this.props.handleSelectRate(value)
        }

        render() {


            const {rateArray, rateArray1, rateArray2, rateValue, rate} = this.state
            const {rateNum} = this.props


            return (


                <div className="pics6">
                    <h1>Survey</h1>
                    <div id="status3_pics">
                        <ul className="pics6_status3">
                            <li>
                                <Image id="1" className="status3-pic" height="300" width="400" alt=""
                                       src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>
                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index = 0) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : 0} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index = 0) => <span
                                                onClick={() => this.rateArray.push(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                </div>


                            </li>
                            <li>
                                <img id="2" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1541213992,76400213&fm=26&gp=0.jpg"/>

                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.rateArray.push(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <img id="3" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1867263544,2857916448&fm=26&gp=0.jpg"/>
                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="status3_pics">
                        <ul className="pics6_status3">
                            <li>
                                <img id="4" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2219225502,1868692565&fm=26&gp=0.jpg"/>
                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>

                            </li>
                            <li>
                                <img id="5" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=979862297,3441058921&fm=26&gp=0.jpg"/>

                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                            <li>
                                <img id="6" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477240067,1549523397&fm=26&gp=0.jpg"/>
                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="status3_pics">
                        <ul className="pics6_status3">
                            <li>
                                <img id="7" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=916075890,1662056472&fm=11&gp=0.jpg"/>
                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>

                            </li>
                            <li>
                                <img id="8" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2870177897,1063334582&fm=26&gp=0.jpg"/>

                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                            <li>
                                <img id="9" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1911301903,2982696630&fm=26&gp=0.jpg"/>
                                <div className={"small"}>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Button>
                            className={"btn-warning"} onClick={onSubmit(this.state)}>Submit
                        </Button>
                    </div>

                </div>


            )
        }


    }
*/}


