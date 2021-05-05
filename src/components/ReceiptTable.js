import React from "react";
import '../styles/Users.css';
import { Table, Tr } from 'styled-table-component';
import {getSurvey} from "../api";

import {Receipt} from "../pages/Receipts";
import {User} from "../pages/Users";
import '../styles/Users.css';

export class ReceiptTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            surveys: [],
        };
    }

    // get a list of all users and set the state variable to store the user list
    async  fetchResult() {
        const data = await getSurvey();
        console.log(data)

        this.setState({ surveys: data, isLoaded: true })
    }

    componentDidMount() {
        this.fetchResult();
    }

    // render a HTML table with user information
    // <a href={value.id}>{value.id}</a> insert later
    render() {
        const { error, isLoaded, surveys } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Table className="receipt-table">
                        <thead>
                        <tr>
                            <th scope="col">UserName</th>
                            <th scope="col">UserType</th>
                            <th scope="col">Muzzle1</th>
                            <th scope="col">Muzzle2</th>
                            <th scope="col">Muzzle3</th>
                            <th scope="col">Muzzle4</th>
                            <th scope="col">Muzzle5</th>
                            <th scope="col">Muzzle6</th>
                            <th scope="col">wrinkle6</th>
                            <th scope="col">wrinkle5</th>
                            <th scope="col">wrinkle4</th>
                            <th scope="col">wrinkle3</th>
                            <th scope="col">wrinkle2</th>
                            <th scope="col">wrinkle1</th>
                            <th scope="col">Operation</th>
                        </tr>
                        </thead>
                        <tbody>

                        {surveys.map(survey => {
                            return <Tr active key={survey._id}>
                                <td className={"surveyData"}>{survey.username}</td>
                                <td className={"surveyData"}>{survey.usertype}</td>
                                <td className={"surveyData"}>{survey.Muzzle1}</td>
                                <td className={"surveyData"}>{survey.Muzzle2}</td>
                                <td className={"surveyData"}>{survey.Muzzle3}</td>
                                <td className={"surveyData"}>{survey.Muzzle4}</td>
                                <td className={"surveyData"}>{survey.Muzzle5}</td>
                                <td className={"surveyData"}>{survey.Muzzle6}</td>
                                <td className={"surveyData"}>{survey.Wrinkle6}</td>
                                <td className={"surveyData"}>{survey.Wrinkle5}</td>
                                <td className={"surveyData"}>{survey.Wrinkle4}</td>
                                <td className={"surveyData"}>{survey.Wrinkle3}</td>
                                <td className={"surveyData"}>{survey.Wrinkle2}</td>
                                <td className={"surveyData"}>{survey.Wrinkle1}</td>
                                {/* <td className={"surveyData"}>{survey.photo7f}</td>
                                <td className={"surveyData"}>{survey.photo7s}</td>
                                <td className={"surveyData"}>{survey.photo8f}</td>
                                <td className={"surveyData"}>{survey.photo8s}</td>
                                <td className={"surveyData"}>{survey.photo9f}</td>
                                <td className={"surveyData"}>{survey.photo9s}</td> */}
                                <td className={"surveyData"}><Receipt key={survey._id} {...survey} /> </td>
                            </Tr>
                        })}

                        </tbody>
                    </Table>
                </div>

            );
        }
    }
}