import { Autocomplete, Textarea, Textbox } from '../components'

const codes = [
    "Alpine Meadows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Homewood",
    "Kirkwood",
    "Mt. Rose",
    "Northstar",
    "Squaw Valley",
    "Sugar Bowl"
]

const EventEntry = () => {

    const onCodeSelected = (e) => {
        console.log('selected code > ', e)
    }

    return (
        <div>
            <Autocomplete
                label="Code"
                options={codes}
                listName="codes"
                id="codes-list"
                onValueSelected={onCodeSelected}
                wrapperId="hello" />
            <Textbox label="Description" />
            <hr />
            <Textbox label="Start" id="start-date" />
            <Textbox label="End" id="end-date" wrapperId="end-date-wrapper" />
            <Textarea label="Remarks" />
            <Textbox label="No of hours" placeholder="# of hours" />
        </div>
    )
}

export default EventEntry