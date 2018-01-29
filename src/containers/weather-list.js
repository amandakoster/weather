import React from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts';
import GoogleMap from '../components/google-map';

class WeatherList extends React.Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => 1.8 * (temp - 273) + 32);
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord;


        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Charts data={temps} color='orange' units='F' /></td>
                <td><Charts data={pressures} color='red' units='hPa'/></td>
                <td><Charts data={humidities} color='blue' units='%'/></td>
            </tr>
        );
    }


    render(){
        return(
            <table className="table table-hover">
                    <thead>
                    <tr>
                    <th>City</th>
                    <th>Temperature (F)</th>
                    <th>Preassure (hPa)</th>
                    <th>Humidity (%)</th>
                    </tr>
                    </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        );
    }
}

function mapStateToProps( { weather }){
    return { weather }; 
// OR { weather } === { weather: weather }
} 

export default connect (mapStateToProps)(WeatherList);