
let FullAmenity = (props) => {
    let fullAmenities = [];
    let borderCss = {
        borderBottomWidth:'1px',
        borderBottomColor:'#EBEBEB',
        borderBottomStyle:'solid',
        padding:5
    }
    if(Object.keys(props).length > 0) {
        let category = props[Object.keys(props)[0]]
        fullAmenities = category.map(ele => {
            return (
                <div key={ele.name}>
                    <div style={{fontSize:14,padding:'20px 0px 5px 0px'}}>{ele.name}</div>
                    <div style={{fontSize:12,paddingBottom:10}}>{ele.description}</div>
                    <div style={borderCss}></div>
                </div>
            );
        })
    }
    return fullAmenities
}

export default FullAmenity;