import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment';

import Dialog from '../components/dialog'
import EventEntry from '../events/entry'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
            slots: []
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    recordEvents(e) {
        let dialog = $(e.currentTarget);
        let remarks = dialog.find('#remarks').val()

        if (!remarks || remarks === '') {
            return
        }

        let _this = this;
        let hours = dialog.find('#hours').val()

        this.state.slots.forEach(selectedSlot => {
            let title = remarks + ' (' + hours + ')'
            let slot = {
                'title': title,
                'start': selectedSlot,
                'end': selectedSlot
            }

            let ctr = 0
            _this.state.events.forEach(event => {
                if (JSON.stringify(event) == JSON.stringify(slot)) {
                    ctr++
                }
            })

            if (ctr === 0) {
                _this.setState({ events: _this.state.events.concat([slot]) })
            } else {
                alert('Oops! Looks like the event you\'ve entered already exist')
            }
        })

        this.setState({ slots: [] })
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
                        this.setState({ slots: slotInfo.slots })

                        let startDate = slotInfo.slots[0]
                        let endDate = slotInfo.slots[0]

                        $('#event-dialog')
                            .find('#start-date')
                            .val(moment(startDate).format('DD / MMM / YYYY'))

                        if (slotInfo.slots.length > 1) {
                            endDate = slotInfo.slots[slotInfo.slots.lenght - 1]

                            $('#event-dialog')
                                .find('#end-date-wrapper').show();
                            $('#event-dialog')
                                .find('#end-date')
                                .val(moment(endDate).format('DD / MMM / YYYY'))
                        } else {
                            $('#event-dialog')
                                .find('#end-date-wrapper')
                                .hide();
                        }

                        $('#event-dialog').modal('show');
                    }}
                />

                <Dialog id="event-dialog"
                    title="New Entry"
                    onClose={this.recordEvents.bind(this)}>
                    <EventEntry />
                </Dialog>
            </div>
        )
    }
}

export default Home