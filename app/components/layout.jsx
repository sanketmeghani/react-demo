import React from 'react';

import Header from './header'

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Welcome To React Demo",
        };
    }

    render() {
        return (
            <Header title={this.state.title}/>
        );
    }
}
