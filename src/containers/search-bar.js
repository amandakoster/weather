import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''

        };
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e){
        console.log(e.target.value)
        this.setState( {term: e.target.value} )
    }

    onFormSubit(e){
        e.preventDefault();
        }

    render(){
        return(
            <form onSubmit= {this.onFormSubit}
            className="input-group">
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