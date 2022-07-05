function Modal(props){

   
    return (
        <div className="modal">
            <p>
                are you sure?
            </p>
            <button className="btn-btn" onClick={props.onCancel}>Cancel</button>
            <button className="btn-btn" onClick={props.onCancel}> Confirm</button>
        </div>
    )
}

export default Modal;