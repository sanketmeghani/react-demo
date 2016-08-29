import React from 'react';
import Header from './header'
import Button from 'react-bootstrap/lib/Button';

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
        return ( 
            <div>
                <Header title={this.state.title}/>
                <Button bsStyle="primary" onClick={this.handleAddItem}>Add Item</Button>
            </div>
        );
    }
}
