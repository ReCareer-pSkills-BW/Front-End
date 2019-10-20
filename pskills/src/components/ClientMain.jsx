import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';

const ClientMain = (props) => {

    useEffect (() => {
        props.fetchData();
    }, [])

    console.log(props)
    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    
        return (
            <div className="main-display">
                {props.error && <p>{props.error}</p>}

            </div>
        );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        jobData: state.jobData,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchData})(ClientMain)