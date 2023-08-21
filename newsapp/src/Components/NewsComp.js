import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class NewsComp extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }
      capitalizefirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
      }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title="NewsHub- "+this.capitalizefirstLetter(this.props.category);
    }
async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6a37f8425884738ab14534cde7c82ef&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false}) 
}
    async componentDidMount(){ 
        this.updateNews();
    }

     handlePrevClick = async ()=>{
    //    callback function-
 this.setState({page:this.state.page - 1},()=>
this.updateNews());
    }
    
     handleNextClick = async ()=>{
     this.setState({page:this.state.page+1},()=>
    this.updateNews());
        }
  
    render() { 
        return (
            <div className="container my-6">
                <h1 className="text-center" >NewsHub - Trending {this.capitalizefirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row"> 
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}
                        author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div> 
        )
    }
}

export default NewsComp    