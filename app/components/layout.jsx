import React from 'react';
import Header from './header'
import Button from 'react-bootstrap/lib/Button';
import Griddle from 'griddle-react';

import EventDispatcher from '../dispatchers/event-dispatcher';
import ParameterStore from '../stores/parameter-store';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Welcome To React Demo",
        };
    }

    componentDidMount() {
        ParameterStore.addChangeListener(this.handleDataChange);
    }

    componentWillUnmount() {
        ParameterStore.removeChangeListener(this.handleDataChange);
    }

    handleDataChange() {
        console.log("Re-rendering component!");
    }

    handleAddItem() {

        console.log("Adding an item");
        EventDispatcher.dispatch({
            type: 'add',
            parameter: {
                name: 'Parameter One',
                value: 'Parameter Value'
            }
        });
    }

    render() {

        let fakeData = [{ 
            "id": 0, 
            "name": "Mayer Leonard", 
            "city": "Kapowsin", 
            "state": "Hawaii", 
            "country": "United Kingdom", 
            "company": "Ovolo", 
            "favoriteNumber": 7 
        }, { 
            "id": 1, 
            "name": "Mayer Leonard", 
            "city": "Kapowsin", 
            "state": "Hawaii", 
            "favoriteNumber": 7 
        }];

        let columns= ["id", "name", "city", "state", "country", "company", "favoriteNumber"];

        return ( 
            <div>
                <Header title={this.state.title}/>
                <Button bsStyle="primary" onClick={this.handleAddItem}>Add Item</Button>

                <Griddle results={fakeData} columns={columns}/>
            </div>
        );
    }
}
