import React from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
class App extends React.Component {
    onSearchSubmit(term){
        console.log(term);
    }
    render(){
        return(
                <div className="ui container" style={{marginTop:'10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <Card/>
                </div>
        );
    }
}

export default App;