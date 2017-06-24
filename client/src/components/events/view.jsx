
import Reflux from 'reflux';
import React from 'react';
import {Route, Link} from 'react-router-dom'
import {StoreEvent, actionsEvent} from '../../stores/event';

class Events extends Reflux.Component { 
    
    constructor(props){
        super(props);
        this.store = StoreEvent; 
    }

    componentDidMount() {
		actionsEvent.refreshEvents();
    } 

    render() {
        return (
        	<div className='events  mdl-grid'>
                <ul>
                {this.state.events.map((event, index) =>
                        <li key={index}>
                        <Link to={'/events/'+event.id}>  
                            <p>title : {event.title}</p>
                            <p>desc : {event.description}</p>
                        </Link>
                        </li>
                )} 
                </ul> 
            </div>
        );
    }
};

export default Events;  