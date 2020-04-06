import React, {Component} from 'react'
import {Map, TileLayer, Popup, GeoJSON} from 'react-leaflet'
import {centerOfMass} from '@turf/turf';


export default class MyMap extends Component {
    state = {
        lat: 35.106766,
        lng: -106.629181,
        zoom: 12
    }
    render() {

       const centerMap = (coords) => {
            this.setState({
                lat: coords[1],
                lng: coords[0],
                zoom: 15

            });
        };

        return (
            this.props.incidents.features ?
                <Map
                    center={[this.state.lat, this.state.lng]}
                    zoom={this.state.zoom}
                    style={{width: '100%', height: '1000px'}}
                >
                    <TileLayer
                        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        accessToken="pk.eyJ1IjoibWF0dGhhcnIiLCJhIjoiY2s4ZGM2aTJpMHNxdTNsbzJleHBpMnF6aiJ9.e9fLkv7Gj1au7SbF4uh5xQ"

                    />

                    {
                        this.props.incidents.features.map(feature => {

                                let {properties} = feature;
                                let center = centerOfMass(feature);
                                center = center.geometry.coordinates;
                                let {bicycle, foot, horse, id, motor_vehicles, name, ski, wheelchair} = properties;


                                return (
                                    <GeoJSON
                                        key={id}
                                        data={feature}
                                    >
                                        <Popup>
                                            {
                                                name ?
                                                    <h3>{name}</h3> :
                                                    <h3>This trail is unnamed</h3>
                                            }

                                            {
                                                bicycle ?

                                                    <p>Bike Trail</p> :
                                                    <p> No Bikes Allowed</p>
                                            }
                                            {
                                                horse ?

                                                    <p>Horse Trail</p> :
                                                    <p> No Horses Allowed</p>
                                            }
                                            {
                                                foot ?

                                                    <p> Walking Trails</p>
                                                    :
                                                    <p>Not sure what the fuck kind of trail this is</p>
                                            }
                                            {

                                                motor_vehicles ?
                                                    <p>This is a trail for motor vehicles</p>
                                                    :
                                                    <p>Motor Vehicles Prohibited</p>
                                            }
                                            {
                                                ski ?
                                                    <p> This trail is ski accessible</p>
                                                    :
                                                    <p> This trail is not ski accessible</p>
                                            }
                                            {
                                                wheelchair ?
                                                    <p> This trail is wheelchair accessible</p>
                                                    :
                                                    <p> This trail is not wheelchair accessible</p>
                                            }
                                            <button onClick={() => centerMap(center)}>View Trail</button>

                                        </Popup>


                                    </GeoJSON>
                                )

                            }
                        )
                    }
                </Map>
                :

                'Data is loading...'

        )
    }
}





