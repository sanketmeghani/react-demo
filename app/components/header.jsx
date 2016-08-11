import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export default class Header extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <PageHeader className="text-center"> { this.props.title } </PageHeader>
            </div>
        );
    }
}
