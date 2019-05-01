let FullAmenity = (props) => {
    let borderCss = {
        borderBottomWidth:'1px',
        borderBottomColor:'#EBEBEB',
        borderBottomStyle:'solid',
        padding:5
    }
    let nameCss = {
        fontSize:14,
        padding:'20px 0px 5px 0px'
    }
    let descriptionCss = {
        fontSize:12,
        paddingBottom:10
    }
    
    let amenityObjects = Object.values(props)[0];
    if(!Array.isArray(amenityObjects)){amenityObjects = [amenityObjects]}
    if (amenityObjects[0] && amenityObjects[0].included === 0) {
        nameCss.textDecoration = 'line-through';
        descriptionCss.display = 'none'
    }
    console.log(amenityObjects)
    let fullAmenities = [];
    fullAmenities = amenityObjects.map(ele => {
        return (
            <div key={ele.name}>
                <div style={nameCss}>{ele.name}</div>
                <div style={descriptionCss}>{ele.description}</div>
                <div style={borderCss}></div>
            </div>
        );
    })

    return fullAmenities
}

export default FullAmenity;