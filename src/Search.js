import React, { Component } from 'react';


class Search extends Component {

submit(event){
  event.preventDefault();
  let value = this.refs.username.value;
  this.props.searchProfile(value);
  this.refs.username.value = '';
}

  render(){
    return(
      <div className="form-group">
        <form onSubmit={this.submit.bind(this)}>
          <label><input className="form-control" type="search" ref="username" placeholder="type username and hit enter "/></label>
        </form>
      </div>
    );
  }
}

export default Search;
