const Modal = (props) => {
    let show = props.show
    let GREY = 'black'

    let backgroundDivStyle = {
        display:'flex',
        position:'fixed',
        top:0,
        left:0,
        height:'100%',
        width:'100%',
        background:'rgba(255,255,255,0.8)',
    }

    let displayDivStyle = {
        display:'flex',
        position:'relative',
        top:'10%',
        left:'10%',
        right:'10%',
        bottom:'10%',
        // justifyContent:'center',
        // alignItems:'center',
        height:'80%',
        width:'40%',
        backgroundColor:'white',
        boxShadow:`1px 1px 1px 3px grey`,
        //itemsAlign: 'center'
    }

    return (
        <div style={backgroundDivStyle}>
            <div style={displayDivStyle}>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    )
}

export default Modal;