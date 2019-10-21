import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import '../App.css'

const ClientMain = (props) => {

    useEffect (() => {
        props.fetchData();
        console.log(props.jobData)
    }, [])


    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    
        return (
            <>
                <h1>Data</h1>
                <div className="main-display">
                    
                    {props.error && <p>{props.error}</p>}
                    {props.jobData.map(data => (
                        <>
                            <div className='card'>
                                <p>{data.date}</p>
                                <p>{data.localName}</p>
                                <p>{data.name}</p>
                            </div>
                        </>

            ))}

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

export default connect(mapStateToProps, {fetchData})(ClientMain)