import FullAmenity from "./fullAmenity.jsx";

const Modal = (props) => {
    let basics = props.state.listingAmenities.filter(ele => (ele.category === 'Basic' && ele.included === 1))
    let facilities = props.state.listingAmenities.filter(ele => (ele.category === 'Facilities' && ele.included === 1))
    let hip = props.state.listingAmenities.filter(ele => (ele.category === 'Hip' && ele.included === 1))
    let notIncluded = props.state.listingAmenities.filter(ele => (ele.included === 0 && ele.appeal >= 7))

    let backgroundDivStyle = {
        display:props.state.modalShow,
        position:'fixed',
        //zIndex: 2,
        //maybe margin:0??
        top:0,
        right:0,
        bottom:0,
        left:0,
        overflow:'auto',
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
    //the below code is repetitive, could do a map for each category, intead of repeating code 4 times over. 
    return (
        <div style={backgroundDivStyle} className='opaqueBackground' onClick={(event) => props.hideModal(event)}>
            <div style={displayDivStyle}>
                <button style={{margin:'20px 0px',borderRadius:'50%'}} className='closeButton' onClick={(event) => props.hideModal(event)}>&times;</button>
                <h2 style={{margin:'0px 0px 20px 0px'}}>Amenities</h2>
                <h4 style={{margin:'10px 0px'}}>Basic</h4>
                <FullAmenity basics={basics}/>
                <h4 style={{margin:'10px 0px'}}>Facilities</h4>
                <FullAmenity facilities={facilities}/>
                <h4 style={{margin:'10px 0px'}}>Hip</h4>
                <FullAmenity hip={hip}/>
                <h4 style={{margin:'10px 0px'}}>Not Included</h4>
                <FullAmenity notIncluded={notIncluded}/>
            </div>
        </div>
    )
}

export default Modal;