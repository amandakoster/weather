import React from 'react';

export default class WeatherList extends React.Component {
    render(){
        return(
            <table className="table table-hover">
                    <thead>
                    <tr>
                    <th>City</th>
                    </tr>
                    </thead>
                <tbody></tbody>
            </table>

        );
    }
}