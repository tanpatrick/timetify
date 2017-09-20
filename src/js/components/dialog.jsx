import React, { Component } from 'react'

class Dialog extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('#' + this.props.id).modal({
            keyboard: true,
            show: false
        }).on('hidden.bs.modal', this.props.onClose)
    }

    render() {
        return (
            <div id={this.props.id} className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Dialog