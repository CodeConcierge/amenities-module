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
                                <tr>
                                    <td>
                                        <svg viewBox="0 0 24 24" style={{height:19,width:19}}>
                                            <path d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z"></path>
                                        </svg>
                                    </td>
                                    <td>
                                        <img src="img/wifi.png" style={{height:19,width:19}}></img>
                                    </td>
                                    <td>
                                        <div>wifi</div>
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