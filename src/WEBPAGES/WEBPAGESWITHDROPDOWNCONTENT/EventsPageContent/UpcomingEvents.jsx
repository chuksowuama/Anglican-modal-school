import React from 'react'
import "./EventspageContents.css"
import { upcomingEvents } from '../../../assets/dataAssets'

const UpcomingEvents = () => {
  return (
    <div className='upcoming-events'>
       <h2>Upcoming Events</h2>
      <p className='subhead'>Stay connected and get involved in our vibrant school community.</p>
      
      <div className="events-grid">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
            <button>{event.action}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingEvents
