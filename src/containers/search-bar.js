import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term = ''
        };
    }





    
    render(){
        return(
            <form className="input-group">
            <input />
            <span className="input-group-button">
            <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>

        )
    }
}

export default SearchBar