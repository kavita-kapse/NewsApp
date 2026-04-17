import { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'


type Props = {
  pageSize: number;
  country: string;
  category: string;
};

type State = {
  articles: any[];
  loading: boolean;
  page: number;
  totalResults: number;
};

export class News extends Component <Props, State> {

  static defaultProps = {
    country : 'in',
    pageSize : 8,
  }

  // static PropTypes = {
  //   country : PropTypes.string,
  //   pageSize : PropTypes.number,
  // }

  constructor(props: Props) {
    super(props);
    console.log("Constuctor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c4aa2c85bd174db6a553285590382613&page=$(this.props.page)&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles, 
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    console.log("Component Did Mount");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c4aa2c85bd174db6a553285590382613&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles, 
    //   totalResults: parseData.totalResults,
    //   loading: false
    // });
    this.updateNews();
  }

  handlePreClick = async () =>
  {
    console.log("Pre");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c4aa2c85bd174db6a553285590382613&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page : this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false
    // })
    this.setState({
       page : this.state.page - 1,
    })
    this.updateNews();
  }

  handleNextClick = async () =>
  {
    console.log("Next");

    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    // {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c4aa2c85bd174db6a553285590382613&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   console.log(parseData);
    //   this.setState({
    //     page : this.state.page + 1,
    //     articles: parseData.articles,
    //     loading: false
    //   })
    // }
    this.setState({
       page : this.state.page + 1,
    })
    this.updateNews();
}

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsUpdates - Top Headline</h1>
        {/* If this.state.loading is true then dispany <Spinner /> otherwise no */}
        {this.state.loading && <Spinner />} 
        <div className="row">
            {!this.state.loading && this.state.articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsItems 
                title={
                  element.title
                  ?element.title?.length > 45
                  ?element.title.slice(0,45)+ "..."
                  :element.title
                  : "Title not available"
                } 
                description={element.description
                  ?element.description?.length > 88
                  ?element.description.slice(0,88) + "..."
                  :element.description
                  : "Description not available"
              } 
                imageUrl={element.urlToImage} 
                newsUrl={element.url} 
                date={element.publishedAt}
                author={element.author}
                source={element.source.name}
                />
              </div>
            ))}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePreClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
