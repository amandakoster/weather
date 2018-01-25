import React from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts';

class WeatherList extends React.Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)

        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                <Charts data={temps} color='orange' />
                </td>
            </tr>
        );
    }


    render(){
        return(
            <table className="table table-hover">
                    <thead>
                    <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Preassure</th>
                    <th>Humidity</th>
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