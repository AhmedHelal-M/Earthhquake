import {Link, useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Details() {
    let {eventId} = useParams();
    const [details,setDetails]= useState([]);

   useEffect( async () => {
       const respond = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventId}`);
       const data = await respond.json();
       setDetails(data);
       
   }, [eventId]);
    return (
        <>
            <div className='event-details'> 
            <h1 className='title'>Earthquake Details</h1>
                <p>Location: {details?.properties?.place}</p>
                <p>Time: {details?.properties?.time}</p>
                <p>Magnitude: {details?.properties?.mag}</p>
                <p>Latitude: {details?.properties?.products?.origin[0]?.properties?.latitude}</p>
                <p>Longitude: {details?.properties?.products?.origin[0]?.properties?.longitude}</p>
                <Link className='Back' to={"/"}>BACK</Link>
            </div>
        </>
    )
}

export default Details
