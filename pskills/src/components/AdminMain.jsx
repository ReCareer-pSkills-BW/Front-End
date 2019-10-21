import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';

const AdminMain = (props) => {

    useEffect (() => {
        props.fetchData();
    }, [props])

    console.log(props.jobData)

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

// React 2 stuff, feel free to check it out

const mapStateToProps = (state) => {
    console.log(state)
    return {
        jobData: state.jobData,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchData})(AdminMain)