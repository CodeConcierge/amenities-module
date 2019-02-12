import Amenity from './amenity.jsx';
import Modal from './modal.jsx';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingAmenities: [],
            show: false
        }
    }

    componentDidMount(){
        $.get('http://localhost:3003/api/amenities', (serverData) => {
            let parsedServerData = JSON.parse(serverData)
            let amenities = [];
            for (var prop in parsedServerData) {
                amenities.push(parsedServerData[prop])
            }
            //console.log(amenities)
            //should order by attractiveness in the sql call. 
            this.setState({
                listingAmenities: amenities
            })
            //console.log(this.state.listingAmenities[2].name)
        })
    }

    showModal(){
        this.setState({show: true});
    };

    hideModal(){
        this.setState({show: false});
    };

    render() {
        return (
            <main style={{height:'100vh'}}>
                <Modal />
                <h2>Amenities</h2>
                <table style={{marginBottom:16}}>
                    <Amenity amenities={this.state.listingAmenities}/>
                </table>
                <a style={{color:'blue',cursor:'pointer'}} onClick={() => console.log('click handler working')}><u>Show all {this.state.listingAmenities.length} amenities</u></a>
                
            </main>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))