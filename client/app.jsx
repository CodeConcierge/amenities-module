class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){
        $.get('http://localhost:3000/api/amenities', (serverData) => {
            let parsedServerData = JSON.parse(serverData)
            let amenities = [];
            for (var prop in parsedServerData) {
                amenities.push(parsedServerData[prop])
            }
            console.log(amenities)
            // this.setState({
            // linesList: stateLines
            // })
        })
    }
    render() {
        return <div>hi from inside app.jsx</div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))