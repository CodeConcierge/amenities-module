class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <div>hi from inside app.jsx</div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))