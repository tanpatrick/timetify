const Textbox = ({ id, wrapperId, label, placeholder }) => {
    return (
        <div id={wrapperId} className="form-group row">
            <label className="col-sm-3 col-form-label" htmlFor={id}>
                {label}
            </label>
            <div className="col-sm-9">
                <input id={id} type="text"
                    className="form-control"
                    placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Textbox