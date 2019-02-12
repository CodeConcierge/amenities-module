const Modal = (props) => {
    // let show = props.show
    // let allAmens = props.allAmens

    let backgroundDivStyle = {
        display:'none',
        position:'fixed',
        top:0,
        left:0,
        height:'100%',
        width:'100%',
        background:'rgba(255,255,255,0.8)'
    }

    let displayDivStyle = {
        display:'inline-block',
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
        boxShadow:`1px 1px 1px 2px grey`,
        //itemsAlign: 'center'
    }

    // let modalText = {
    //     margin:'20px 30px'
    // }

    return (
        <div style={backgroundDivStyle}>
            <div style={displayDivStyle}>
                <button style={{margin:'20px 30px'}}>Close</button>
                <h2 style={{margin:'0px 30px'}}>Amenities</h2>
                <h4 style={{margin:'10px 30px'}}>Basic</h4>
                <h4 style={{margin:'10px 30px'}}>Dining</h4>
                <h4 style={{margin:'10px 30px'}}>Not Included</h4>
            </div>
        </div>
    )
}

export default Modal;