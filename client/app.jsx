import React from 'react';
import $ from 'jquery';
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
                top:0
            },
            modalShow: 'none',
        }
    }

    componentDidMount(){
        $.get('http://localhost:3003/api/amenities', (serverData) => {
            let parsedServerData = JSON.parse(serverData)
            let houseAmenities = [];

            for (var prop in parsedServerData) {
                houseAmenities.push(parsedServerData[prop])
            }
            this.setState({
                listingAmenities: houseAmenities
            })
            console.log(this.state.listingAmenities)
            window.scrollTo(0,0)
            //on refresh, the page loads back to the scrollTo probably stored in DOM. This extra scrollTo 0,0 adds a small glitch on refresh. 
        })
    }

    showModal(){
        let backgroundTop = $(window).scrollTop();
        this.setState({
            mainStyle: {
                color:'#484848',
                fontFamily:'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
                position:'fixed',
                top:-backgroundTop+8,
                overflow:'hidden'
            },
            modalShow: 'block',
        });
    };

    hideModal(event){
        let backgroundTest = this.state.mainStyle.top;

        if (event.target.className === 'closeButton' || event.target.className === 'opaqueBackground') {
            this.setState({
                mainStyle: {
                    color:'#484848',
                    fontFamily:'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
                },
                modalShow: 'none'
            },
            () => window.scrollTo(0, -backgroundTest+8)
            );
        }
    };
    //for length below, need to consider if displaying carbon monitor, if yes, need to remove description from db, and add manually on client 
    render() {
        return (
            <main style={this.state.mainStyle}>
                <div style={{fontSize:100}}>placeholder</div>
                <div style={{fontSize:100}}>placeholder</div>
                <div style={{fontSize:100}}>placeholder</div>
                <div style={{fontSize:100}}>placeholder</div>
                <Modal state={this.state} hideModal={this.hideModal.bind(this)}/>
                <h2>Amenities</h2>
                <table style={{marginBottom:16}}>
                    <Amenity amenities={this.state.listingAmenities}/>
                </table>
                <a style={{color:'blue',cursor:'pointer'}} onClick={this.showModal.bind(this)}><u>Show all {this.state.listingAmenities.filter(ele => ele.included === 1).length} amenities</u></a>
                <div style={{fontSize:100}}>placeholder</div>
                <div style={{fontSize:100}}>placeholder</div>
                <div style={{fontSize:100}}>placeholder</div>
            </main>
        )
    }
}

export default App;