import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine };

class WeatherList extends React.Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        console.log('temps', temps)

        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                <Sparklines height={120} width={180} data={temps}>
                    <SparklinesLine color="green" />
                </Sparklines>
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