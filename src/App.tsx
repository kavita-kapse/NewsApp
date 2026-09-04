import { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 4;

  apiKey = import.meta.env.VITE_NEWS_API_KEY;

  state = {
    progress : 0
  }

    setProgress = (progress: number): void => {
      this.setState({ progress });
    };

  render() {
    return (
      <div>
        <LoadingBar
          color="#f11946"
          height={3}
          progress={this.state.progress}
        />
        <NavBar />
        <Routes>
          <Route path="/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business"/> } />
          <Route path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/> } />
          <Route path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/> } />
          <Route path="/health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health"/> } />
          <Route path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science"/> } />
          <Route path="/sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports"/> } />
          <Route path="/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology"/> } />
        </Routes>
        {/* <News pageSize={4} country="us" category="science"/> */}
        {/* <p>Hello, My first Class based component {this.c}</p> */}
      </div>
    )
  }
}
