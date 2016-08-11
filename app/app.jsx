import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/less/bootstrap.less';

class App extends React.Component {

    render() {
        return <h1> This is react demo </h1>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
