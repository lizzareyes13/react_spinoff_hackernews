import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: "React",
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Ambramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

// function isSearched(searchTerm) {
//   return function(item) {
//     return !searchTerm || item.title.toLowerCase().includes(searchTerm);
//   }
// }

const isSearched = (searchTerm) => (item) =>  !searchTerm || item.title.toLowerCase().includes(searchTerm);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

  onDismiss(id) {
      const isNotId = item => item.objectID !== id;
      const updateList = this.state.list.filter(isNotId);
      this.setState({ list: updateList });
  }
    render () {
        <div className="App">
          <form>
            <input type="text"
            onChange={this.onSearchChange}/>
          </form>
          { this.state.list.filter(isSearched(this.state.searchTerm)).map(item => {
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}
                  </a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                  <button
                    onClick={() => this.onDismiss(item.objectID)}
                      type>

                  </button>
                </span>
              </div>

          };
            list.map(function(item) {
              return (
                <div key={item.objectID}>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                </div>
              );
            })}
        </div>
        );
    }
}

export default App;
