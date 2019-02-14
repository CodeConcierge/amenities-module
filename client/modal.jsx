import FullAmenity from "./fullAmenity.jsx";

const Modal = (props) => {
    
    let basics = props.state.listingAmenities.filter(ele => ele.category === 'Basic')
    let hip = props.state.listingAmenities.filter(ele => ele.category === 'Hip')

    let backgroundDivStyle = {
        display:props.state.modalShow,
        position:'fixed',
        //zIndex: 2,
        top:0,
        right:0,
        bottom:0,
        left:0,
        overflow:'auto' ,
        height:'100%',
        width:'100%',
        background:'rgba(255,255,255,0.8)',
    }

    let displayDivStyle = {
        display:'block',
        position:'relative',
        zIndex: 3,
        margin:'50px auto',
        padding:'0px 30px',
        height:'200%',
        width:'70%',
        backgroundColor:'white',
        boxShadow:'rgba(0, 0, 0, 0.2) 0px 1px 10px 0px',
    }

    return (
        <div style={backgroundDivStyle} className='opaqueBackground' onClick={(event) => props.hideModal(event)}>
            <div style={displayDivStyle}>
                <button style={{margin:'20px 0px',borderRadius:'50%'}} className='closeButton' onClick={(event) => props.hideModal(event)}>&times;</button>
                <h2 style={{margin:'0px 0px 20px 0px'}}>Amenities</h2>
                <h4 style={{margin:'10px 30px 10px 0px'}}>Basic</h4>
                <FullAmenity basics={basics}/>
                <h4 style={{margin:'10px 30px 10px 0px'}}>Hip</h4>
                <FullAmenity hip={hip}/>
                <h4 style={{margin:'15px 0px'}}>Not Included</h4>
                <div style={{fontSize:20}}>placey mcPlace place</div>
            </div>
        </div>
    )
}

export default Modal;