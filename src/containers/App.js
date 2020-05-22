import React, {Component} from 'react';
import "tachyons"
import CardList from '../components/CardList/CardList';
import SearchField from '../components/SearchField/SearchField';
import  Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends Component{
  constructor(){
    super();
    this.state= {
      kittens: [],
      input: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      this.setState({kittens: data})
    })
  }

  textChange = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    const {input, kittens} = this.state;

    const filteredCats = kittens.filter(kitten => {
      return kitten.name.toLowerCase().includes(input.toLowerCase())
    })

    return kittens.length === 0 ? 
    <h1>Loading...</h1> :
    (
      <div className="App tc">
        <p className="title">Cat Friends!</p>
        <SearchField value={this.textChange}/>

         
        <Scroll>
          <ErrorBoundary> 
            <CardList cats={filteredCats}/>
           </ErrorBoundary>

        </Scroll>

      </div>
      );
    }
  }


export default App;
