
let Amenity = (props) => {
    let amenitiesNames = [];
    let amenitiesImages = [];
    let aTableRowOfNamesAndImages = [];
    if(props.amenities[0]) {
        aTableRowOfNamesAndImages = props.amenities.map(ele => {
            return (
                <tr key={ele.name}>
                    <td><div>{ele.name}</div></td>
                    <td><img src={ele.img_url} style={{height:20,width:20}}></img></td>
                </tr>
            )
        })
        // amenitiesNames = props.amenities.map(ele => <div>{ele.name}</div>);
        // amenitiesImages = props.amenities.map(ele => <img src={ele.img_url} style={{height:20,width:20}}></img>);
    }
    return (
        <tbody>{aTableRowOfNamesAndImages}</tbody>
        // <tr>
        //     <td>
        //         {amenitiesImages}
        //     </td>
        //     <td>
        //         {amenitiesNames}
        //     </td>
        // </tr>
    );
    
}

export default Amenity;