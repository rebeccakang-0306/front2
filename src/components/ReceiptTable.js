import React from "react";
import '../styles/Users.css';
import { Table, Tr } from 'styled-table-component';
import {getSurvey} from "../api";

import {Receipt} from "../pages/Receipts";
import {User} from "../pages/Users";

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
                            <th scope="col">P1-front</th>
                            <th scope="col">P1-side</th>
                            <th scope="col">P2-front</th>
                            <th scope="col">P2-side</th>
                            <th scope="col">P3-front</th>
                            <th scope="col">P3-side</th>
                            <th scope="col">P4-front</th>
                            <th scope="col">P4-side</th>
                            <th scope="col">P5-front</th>
                            <th scope="col">P5-side</th>
                            <th scope="col">P6-front</th>
                            <th scope="col">P6-side</th>
                            <th scope="col">P7-front</th>
                            <th scope="col">P7-side</th>
                            <th scope="col">P8-front</th>
                            <th scope="col">P8-side</th>
                            <th scope="col">P9-front</th>
                            <th scope="col">P9-side</th>
                            <th scope="col">Operation</th>
                        </tr>
                        </thead>
                        <tbody>

                        {surveys.map(survey => {
                            return <Tr active key={survey._id}>
                                <td className={"surveyData"}>{survey.username}</td>
                                <td className={"surveyData"}>{survey.usertype}</td>
                                <td className={"surveyData"}>{survey.photo1f}</td>
                                <td className={"surveyData"}>{survey.photo1s}</td>
                                <td className={"surveyData"}>{survey.photo2f}</td>
                                <td className={"surveyData"}>{survey.photo2s}</td>
                                <td className={"surveyData"}>{survey.photo3f}</td>
                                <td className={"surveyData"}>{survey.photo3s}</td>
                                <td className={"surveyData"}>{survey.photo4f}</td>
                                <td className={"surveyData"}>{survey.photo4s}</td>
                                <td className={"surveyData"}>{survey.photo5f}</td>
                                <td className={"surveyData"}>{survey.photo5s}</td>
                                <td className={"surveyData"}>{survey.photo6f}</td>
                                <td className={"surveyData"}>{survey.photo6s}</td>
                                <td className={"surveyData"}>{survey.photo7f}</td>
                                <td className={"surveyData"}>{survey.photo7s}</td>
                                <td className={"surveyData"}>{survey.photo8f}</td>
                                <td className={"surveyData"}>{survey.photo8s}</td>
                                <td className={"surveyData"}>{survey.photo9f}</td>
                                <td className={"surveyData"}>{survey.photo9s}</td>
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