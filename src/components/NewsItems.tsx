import { Component } from 'react'

type Props = {
  title?: string;
  description?: string;
  imageUrl?: string;
  newsUrl?: string;
  date?: string;
  author?: string;
  source?: string;
};

export class NewsItems extends Component <Props> {

  render() {
    let {title, description, imageUrl, newsUrl, date, author, source} = this.props; // destructuring
    return (
      <div className="my-3">
        <div className="card">
            <span className="position-absolute top-0 badge bg-primary"> 
              {source}
            </span>
          <img src={!imageUrl?"https://images.axios.com/4_o1_b3sL-2don-mO6sUSq-FCjE=/1366x768/smart/2022/10/06/173812-1665077892362.jpg": imageUrl} className="card-img-top" alt="..." style={{height: "150px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">
              By {!author? "unknown": author} 
              on {new Date(date).toLocaleString()}
              </small>
              </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
