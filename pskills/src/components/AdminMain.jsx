import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import '../App.css'

const initialLocation = {
    id: '',
    name: '',
    type: '',
    residents: [],
  };

  

const AdminMain = (props) => {  
    const [location, setLocation] = useState(initialLocation)

    const thisId = props.match.params.provider - 1

    useEffect (() => {
        props.fetchData();
        setLocation(props.jobData[thisId]);
        const thisLocation = props.jobData.find(
            location => `${location}` === props.jobData[thisId]
        );
        if (thisLocation) setLocation(thisLocation);
    }, [])
    
    console.log(props.jobData[thisId])
  
    console.log(location)

    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    
        return (
            <>
                <h1>Data</h1>
                <div className="main-display">
                    
                    {props.error && <p>{props.error}</p>}
                        <>
                            <div className='card'>
                                <p>{location.name}</p>
                                <p>{location.type}</p>
                                <p>{location.dimension}</p>
                            </div>
                        </>


                </div>
                </>
        );
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

export default connect(mapStateToProps, {fetchData})(AdminMain)