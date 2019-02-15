let FullAmenity = (props) => {
    let fullAmenities = [];
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

    if(Object.keys(props).length > 0) {
        let categoryAmens = props[Object.keys(props)[0]]
        if (categoryAmens[0] && categoryAmens[0].included === 0) {
            nameCss.textDecoration = 'line-through';
            descriptionCss.display = 'none'
        }
        fullAmenities = categoryAmens.map(ele => {
            return (
                <div key={ele.name}>
                    <div style={nameCss}>{ele.name}</div>
                    <div style={descriptionCss}>{ele.description}</div>
                    <div style={borderCss}></div>
                </div>
            );
        })
    }
    return fullAmenities
}

export default FullAmenity;