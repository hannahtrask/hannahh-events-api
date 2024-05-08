import './App.css';
import axios from 'axios';
import Events from './components/Events';
import {useEffect, useState} from "react";

const API_URL ='http://localhost:3000/api/v1/events'

function getEventData() {
    return axios.get(API_URL).then(response => response.data)
}

function App() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        let mounted = true;
        getEventData().then(data => {
            if (mounted) {
            setEvents(data)
            }
        })
    console.log(events)
        return () => mounted = false;
    }, []);


  return (
    <div className="App">
        <h1>Hannah's Events</h1>
        <Events events={events} />
    </div>
  );
}

export default App;
