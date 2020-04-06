import React, { Component, Fragment} from  'react';
// import axios from 'axios';

import MyMap from './components/Map'
import  trail_segments from './data/trail_segments';


class App extends Component {
  state = {
    incidents: []
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

      <MyMap incidents={this.state.incidents} />

    );
  }
}


export default App;
