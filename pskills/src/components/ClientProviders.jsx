import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';

const ClientProviders = (props) => {

    useEffect (() => {
        props.fetchData();
        console.log(props.jobData)
    }, [])


    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    
        return (
            <div></div>
        )
}

// React 2 stuff, feel free to check it out

const mapStateToProps = (state) => {
    console.log(state.jobData)
    return {
        jobData: state.jobData,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchData})(ClientProviders)