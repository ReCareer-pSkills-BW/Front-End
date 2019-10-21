import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import '../App.css';


const ClientProviders = (props) => {

    useEffect (() => {
        props.fetchData();
        console.log(props.jobData)
    }, [])


    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    console.log(props.jobData)
        return (

               
                <div className='providers'>
                <h1>Provider Locations</h1>
                {props.jobData.map(data => (
                        
                    <div>
                        <h4 onClick={() => props.history.push(`/client-main/${data.id}`)}>{data.name}</h4>
                    </div>
                
                ))}
            </div> 
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