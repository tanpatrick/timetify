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
                    selectable
                    events={this.state.events}
                    views={allViews}
                    onSelectSlot={(slotInfo) => {
                        slotInfo.slots.forEach(selectedSlot => {
                            let title = prompt('Please enter the event name')
                            let slot = {
                                'title': title,
                                'start': selectedSlot,
                                'end': selectedSlot
                            }

                            let ctr = 0
                            this.state.events.forEach(event => {
                                if (JSON.stringify(event) == JSON.stringify(slot)) {
                                    ctr++
                                }
                            })

                            if (ctr === 0) {
                                this.setState({ events: this.state.events.concat([slot]) })
                            } else {
                                alert('Oops! Looks like the event you\'ve entered already exist')
                            }
                        })
                    }}
                />
            </div>
        )
    }
}

export default Home;