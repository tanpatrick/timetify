import React, { Component } from 'react'

class Autocomplete extends Component {

    constructor(props) {
        super(props)
    }

    get value() {
        return this.refs.inputField.value
    }

    set value(value) {
        this.refs.inputField.value = value
    }

    componentDidMount() {
        $('#' + this.props.id).off('input')
        $('#' + this.props.id).on('input', this.onValueSelected.bind(this))
    }

    onValueSelected(e) {
        let selected = e.target.value
        let _this = this;

        $('#' + this.props.wrapperId).find('datalist option').each(function (index, option) {
            if (selected === option.value) {
                _this.props.onValueSelected.call(_this, selected)
            }
        })
    }

    render() {
        return (
            <div id={this.props.wrapperId} className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                <div className="col-sm-9">
                    <input id={this.props.id} type="text" className="form-control"
                        placeholder={this.props.placeholder}
                        ref="inputField"
                        list={this.props.listName} />
                    <datalist id={this.props.listName}>
                        {this.props.options.map(
                            (option, key) => <option key={key} value={option}>{option}</option>
                        )}
                    </datalist>
                </div>
            </div>
        )
    }
}

export default Autocomplete