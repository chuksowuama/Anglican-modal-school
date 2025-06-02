import React from 'react'
import { pastEvents } from '../../../assets/dataAssets'

const PastEventsArchive = () => {
  return (
    <div className='past-events'>
     <h2>Past Events</h2>
      <p className='subhead'>Take a look back at some of our recent memorable school events.</p>

      <div className="past-events-grid">
        {pastEvents.map((event, index) => (
          <div key={index} className="past-event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.summary}</p>
              <ul>
                {event.highlights.map((point, i) => (
                  <li key={i}>🔹 {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PastEventsArchive
