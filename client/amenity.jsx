
let Amenity = (props) => {
    let amenTableData = [];
    let amenRow = [];
    if(props.amenities[0]) {
        let amenSliced = props.amenities.slice(0,4);
        amenTableData = amenSliced.map(ele => {
            return <td style={{paddingRight:110}}><img src={ele.img_url} style={{height:20,width:20}}></img>{ele.name}</td>
        })
        for (let i = 0; i <= amenSliced.length / 2; i+=2) {
            amenRow.push(<tr key={amenSliced[i].name}>{amenTableData[i]}{amenTableData[i+1]}</tr>) 
        }
        //carbon monoxide? add it manually
    }
    return <tbody>{amenRow}</tbody>
}

export default Amenity;