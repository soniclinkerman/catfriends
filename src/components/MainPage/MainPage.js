import React, {Component} from 'react';
import CardList from '../../components/CardList/CardList';
import SearchField from '../../components/SearchField/SearchField';
import  Scroll from '../../components/Scroll';
import ErrorBoundary from '../../components/ErrorBoundary';
import Header from '../../components/Header/Header';

class MainPage extends Component{
  componentDidMount(){
    this.props.onRequestRobots();

  }

  filteredCats = () => {
    return this.props.kittens.filter(kitten => {
        return kitten.name.toLowerCase().includes(this.props.searchField.toLowerCase())
      })
  }

  render() {
    const {onSearchChange, kittens, isPending} = this.props;
    
    return isPending ? 
    <h1>Loading...</h1> :
    (
      <div className="App tc">
        <Header/>
        <SearchField value={onSearchChange}/>

        <Scroll>
          <ErrorBoundary> 
            <CardList cats={this.filteredCats()}/>
           </ErrorBoundary>
        </Scroll>
      </div>
      );
    }
  }


export default MainPage;
