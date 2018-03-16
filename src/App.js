import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: 'ujlYQeg8ShE44ZUZfha4tmvY1PnisdGQ',
    domain: 'smukeshkumar240.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {

      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }
        this.setProfile(authResult.idToken , profile);
      })
    });
    this.getProfile();
  }

  setProfile(idToken , profile){
    localStorage.setItem('idToken' , profile);
    localStorage.setItem('profile' ,JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile(){
    if(localStorage.getItem('idToken') != null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);
      });
    }
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      idToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    });
  }

  render() {
    let Users;
    if(this.state.idToken){
      Users = <Github/>
    }else{
      Users = "Click on Login to view Github Profile"
    }
    return (

        <div className="App">
        <Header
          lock = {this.lock}
          idToken = {this.state.idToken}
          profile = {this.state.profile}
          onLogout = {this.logout.bind(this)}
          onLogin = {this.showLock.bind(this)}
           />
           <h1>{Users}</h1>
        </div>

    );
  }
}

export default App;
