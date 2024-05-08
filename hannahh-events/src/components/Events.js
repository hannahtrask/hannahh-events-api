import React from 'react'

function Events({events}) {
    return (
        <>
            <div>Events</div>
            {events && events.map(item => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Events