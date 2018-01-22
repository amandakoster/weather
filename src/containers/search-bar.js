import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        };
    }

    onInputChange(e){
        console.log(event.target.value)
    }

    
    render(){
        return(
            <form className="input-group">
                <input 
                placeholder="Get a 5 day-forcast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
            <span className="input-group-button">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>

        );
    }
}

export default SearchBar