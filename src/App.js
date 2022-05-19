import axios from "axios";
import "./App.css";
import React, { Component } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            const persons = res.data;
            this.setState({ persons: persons, isLoaded: true });
        });
    }

    render() {
        return (
            <div className="ListBox">
                <h1 className="title">Calling Users by Axios</h1>
                <ListGroup>
                    {this.state.isLoaded === true ? (
                        this.state.persons.map((user) => (
                            <ListGroupItem
                                color={user.id % 2 === 0 ? "" : "primary"}
                                key={user.id}
                                href={"https://" + user.website}
                                tag="a"
                                target="_blank"
                            >
                                {user.username} : {user.name}
                            </ListGroupItem>
                        ))
                    ) : (
                        <div class="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
                </ListGroup>
            </div>
        );
    }
}