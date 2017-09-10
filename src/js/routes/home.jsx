import React, { Component } from 'react'

import InfiniteCalendar from 'react-infinite-calendar';

const today = new Date()
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Welcome, User!</h3>
                <InfiniteCalendar
                    width={'100%'}
                    height={350}
                    selected={today}
                    disabledDays={[0, 6]}
                    minDate={lastWeek}
                />
            </div>
        )
    }
}

export default Home;