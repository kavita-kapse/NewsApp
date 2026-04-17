import { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom'

export default class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/business" element={ <News key="business" pageSize={this.pageSize} country="us" category="business"/> } />
          <Route path="/entertainment" element={ <News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/> } />
          <Route path="/general" element={ <News key="general" pageSize={this.pageSize} country="us" category="general"/> } />
          <Route path="/health" element={ <News key="health" pageSize={this.pageSize} country="us" category="health"/> } />
          <Route path="/science" element={ <News key="science" pageSize={this.pageSize} country="us" category="science"/> } />
          <Route path="/sports" element={ <News key="sports" pageSize={this.pageSize} country="us" category="sports"/> } />
          <Route path="/technology" element={ <News key="technology" pageSize={this.pageSize} country="us" category="technology"/> } />
        </Routes>
        {/* <News pageSize={4} country="us" category="science"/> */}
        {/* <p>Hello, My first Class based component {this.c}</p> */}
      </div>
    )
  }
}
