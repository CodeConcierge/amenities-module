import React from 'react';
import Amenity from './shortAmenity.jsx';
import Modal from './modal.jsx';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingAmenities: [],
            mainStyle: {
                color:'#484848',
                fontFamily:'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
                //top:0
            },
            modalShow: 'none',
            clickHeight: 0
        }
    }

    componentDidMount(){
        //let homeId = Math.floor(Math.random()*98 + 100);
        window.scrollTo(0, 0)
        let paramId = 100;
        if (window.location.href.split('?')[1]) {
            paramId = window.location.href.split('?')[1];
        } else {
            window.location = window.location.href + "?100";
        }
        //fetch('api/amenities/' + homeId, {
        fetch('http://ec2-3-91-230-2.compute-1.amazonaws.com/api/amenities/' + paramId, {
            method: 'GET',
            //may be able to specify a body here as well
            //mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                let houseAmenities = [];
                for (var prop in data) {
                    houseAmenities.push(data[prop])
                }
                this.setState({
                    listingAmenities: houseAmenities
                })
            })
    }

    showModal(){
        let backgroundTop = window.pageYOffset;
        document.body.style.setProperty('overflow','hidden')
        this.setState({
            // mainStyle: {
            //     color:'#484848',
            //     fontFamily:'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
            //     position:'relative',
            //     //top:-backgroundTop+8,
            //     overflow:'hidden'
            //     //this overflow hidden is only affecting my modal, not the whole page
            // },
            modalShow: 'block',
            clickHeight: backgroundTop,
        });
    };

    hideModal(event){
        let origPosition = this.state.clickHeight;
        document.body.style.setProperty('overflow','visible')
        if (event.target.className === 'closeButton' || event.target.className === 'opaqueBackground') {
            this.setState({
                mainStyle: {
                    color:'#484848',
                    fontFamily:'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
                },
                modalShow: 'none'
            },
            () => window.scrollTo(0, -origPosition+8)
            );
        }
    };
    //for length below, need to consider if displaying carbon monitor, if yes, need to remove description from db, and add manually on client 
    render() {
        return (
            <main style={this.state.mainStyle}>
                <Modal state={this.state} hideModal={this.hideModal.bind(this)}/>
                <h2>Amenities</h2>
                <table style={{marginBottom:16}}>
                    <Amenity amenities={this.state.listingAmenities}/>
                </table>
                <a style={{color:'blue',cursor:'pointer'}} onClick={this.showModal.bind(this)}><u>Show all {this.state.listingAmenities.filter(ele => ele.included === 1).length} amenities</u></a>
            </main>
        )
    }
}

export default App;