import React from 'react'
import './App.scss';
import ReactJson from 'react-json-view';

function Results(props) {
    return (
        <div id="content">
            <h2> Results API:</h2>
            <h3> Headers: <ReactJson src={props.headers} /></h3>
            <h3>Results:</h3>
            < ReactJson src={props.results} />
        </div>
    );
}

export default Results;
