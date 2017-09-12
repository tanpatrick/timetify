import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    render() {
        let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

        return (
            <div>
                <h3>Welcome, User!</h3>
                <BigCalendar
                    {...this.props}
                    events={this.state.events}
                    views={allViews}
                />
            </div>
        )
    }
}

export default Home;