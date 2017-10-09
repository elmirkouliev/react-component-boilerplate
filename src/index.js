import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * This is your boilerplate component
 * @description Here are some words to better describe what this does. Which is nothing.
 */
class Sample extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="sample">This is a React Component that's also an NPM module!</div>
        );
    }
}

Sample.defaultProps = {

};

Sample.propTypes = {

};

export default Sample;