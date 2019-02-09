class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){
        $.get('http://localhost:3003/api/amenities', (serverData) => {
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
        return (
            <div>
                <section>
                    <h2>Amenities</h2>
                    <div style={{marginBottom:16}}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <svg viewBox="0 0 24 24" style={{height:19,width:19}}>
                                            <path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fillRule="evenodd"></path>
                                        </svg>
                                    </td>
                                    <td>
                                        <img src="img/kitchen.png" style={{height:19,width:19}}></img>
                                    </td>
                                    <td>
                                        <div>Kitchen</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))