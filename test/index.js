import React from 'react';
import ReactDOM from 'react-dom';
import Sample from 'react-component-boilerplate';

/**
 * Test component that just imports our Sample component
 */
class Test extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sample />
        );
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('app')
);