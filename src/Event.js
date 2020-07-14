import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    // Call the superclass constructor
    // so React can initialize it
    // So we can pass props down from the parent component to the child component
    super(props);
    this.state = {
      showDetails: false,
    };
  }
  eventShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { event } = this.props;
    return (
      <div className="Event">
        <div className="eventSummary">
          <div className="eventName">Title: {event.name}</div>
          <div className="groupName">Group Name: {event.group.name}</div>
          <div className="localTime">Time: {event.local_time}</div>
          <div className="localDate">Date: {event.local_date}</div>
          <div className="eventAttending">
            Confirmed Attending: {event.yes_rsvp_count}
          </div>
          <div
            type="button"
            className="eventButton"
            onClick={() => this.eventShowDetails()}
          >
            Details
          </div>
          {this.state.showDetails && (
            <div className="unfurlEventDetails">
              <div className="eventDescription">{event.description}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Event;