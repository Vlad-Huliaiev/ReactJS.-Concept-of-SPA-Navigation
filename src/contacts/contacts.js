import React, {Component} from "react";
import "./contacts.css";
import Contact from "./contact.js";

const contactsMock = [{
        firstName: "Anakin",
        lastName: "Skywalker",
        phone: "+380956319521",
        gender: "male",
        id: 1
    }, {
        firstName: "Luke",
        lastName: "Skywalker",
        phone: "+380931460123",
        gender: "male",
        id: 2
    }, {
        firstName: "Leia",
        lastName: "Organa",
        phone: "+380666666666",
        gender: "female",
        id: 3
    }, {
        firstName: "Rey",
        lastName: "Skywalker",
        phone: "+380504691254",
        gender: "female",
        id: 4
    }, {
        firstName: "C3",
        lastName: "PO",
        phone: "+380739432123",
        gender: "droid",
        id: 5
    }, {
        firstName: "R2",
        lastName: "D2",
        phone: "+380956319521",
        gender: "droid",
        id: 6
    }];

    export default class Contacts extends Component{
        state = {
            contacts: [...contactsMock],
            search: ''
        }

        updateSearch = (event) => {
            this.setState({search: event.target.value});
        }

        render(){
            let filteredContacts = this.state.contacts.filter(
                (user) => {
                    let a = user.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                    let b = user.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                    return a + b;
                }
            );
            return(
                <div className="contacts-wrapper">
                <p>
                    <input value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                </p>
                {filteredContacts.map((contact) => {
                    return(
                        <Contact firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} gender={contact.gender}/>
                    )
                })}
                </div>
            )
        }
    }



