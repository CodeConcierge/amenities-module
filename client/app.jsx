import Amenity from './amenity.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingAmenities: []
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
    render() {
        return (
            <div>
                <section>
                    <h2>Amenities</h2>
                    <div style={{marginBottom:16}}>
                        <table>
                            <Amenity amenities={this.state.listingAmenities}/>
                        </table>
                    </div>
                    <a style={{color:'blue'}} onClick={() => console.log('click handler working')}>Show all {this.state.listingAmenities.length} amenities</a>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))