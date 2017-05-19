import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


require('./index.css');



ReactDOM.render(
    <App />, document.getElementById('app')
);





/*class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="Avatar" style={{width: 100, height: 100}} />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: 'PropTypes.string.isRequired',
  name: 'PropTypes.string.isRequired',
  username: 'PropTypes.string.isRequired'
}

ReactDOM.render(
  <Badge 
    name='Tyler McGinnis'
    username='tylermcginnis'
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>,
  document.getElementById('app')
);


class Users extends React.Component {
  render() {
    
    let friends = this.props.list.filter(user => user.friend);
    let nonFriends = this.props.list.filter(user => !user.friend);
    
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map((user) => <li key={user.name}>{user.name}</li>)}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {nonFriends.map(user => <li key={user.name}>{user.name}</li>)}
                                  
        </ul>        
      </div>
    )
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
); */