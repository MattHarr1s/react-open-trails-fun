import React, { Component, Fragment} from  'react';
// import axios from 'axios';
import "leaflet/dist/leaflet.css"
import "leaflet/dist/leaflet.js"
import MyMap from './components/Map'
import  trail_segments from './data/trail_segments';


class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  state = {
    incidents: []
  }

  onClick(coords){
    this.setState({
      lat:coords[1],
      lng: coords[0],
      zoom: 15
    });
  }




  async componentDidMount() {
    // const res = await  axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
    //   params: {
    //     "$limit": 500,
    //     "$$app_token": 'ZCbUZnDAcRWUAuewqcS4tpDm8'
    //   }
    // });
    // const incidents = res.data;
    // console.log(res);
    this.setState({incidents: trail_segments});
  };


  render() {
    return (
        <Fragment>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
              integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossOrigin=""/>

    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossOrigin=""></script>
      <MyMap incidents={this.state.incidents} />
        </Fragment>
    );
  }
}


export default App;
