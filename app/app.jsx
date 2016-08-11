import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/lib/Button';

import 'bootstrap/less/bootstrap.less';

class App extends React.Component {

    render() {
        return <Button bsStyle='success' bsSize='large'>React Demo</Button>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
