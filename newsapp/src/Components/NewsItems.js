import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date,source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{left:'98%',zIndex:'1'}}>
    {source}</span>
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on  
                        {" " +new Date(date?date:"Not Available").toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems