// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize: 38,
//     category: 'General'

//   }
//   static propTypes = {

//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string

//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `NewsIt - ${this.props.category}`;
//   }

//   async updateNews() {
//     this.props.setProgress(15);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=497c75a234924072b3bc46edcb0f2bff&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(40);
//     let parsedData = await data.json();
//     this.props.setProgress(75);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//     })
//     this.props.setProgress(100);
//   }
//   async componentDidMount() {
//     // try {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=497c75a234924072b3bc46edcb0f2bff&page=1&pageSize=${this.props.pageSize}`;
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();
//     //   this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
//     // }
//     // catch (err) {
//     //   console.log(err)
//     // }
//     this.updateNews();
//   }
//   // handlePrevClick = async () => {
//   //   // try {
//   //   //   console.log("previous");
//   //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=497c75a234924072b3bc46edcb0f2bff&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//   //   //   this.setState({loading:true});
//   //   //   let data = await fetch(url);
//   //   //   let parsedData = await data.json();

//   //   //   this.setState({
//   //   //     page: this.state.page - 1,
//   //   //     articles: parsedData.articles,
//   //   //     loading:false
//   //   //   })
//   //   // }
//   //   // catch (err) {
//   //   //   console.log(err)
//   //   // }
//   //   await this.setState({ page: this.state.page - 1 });
//   //   this.updateNews();
//   // }
//   // handleNextClick = async () => {
//   //   // try {
//   //   //   console.log("Next");
//   //   //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

//   //   //   }
//   //   //   else {
//   //   //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=497c75a234924072b3bc46edcb0f2bff&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//   //   //     this.setState({loading:true});
//   //   //     let data = await fetch(url);
//   //   //     let parsedData = await data.json();

//   //   //     this.setState({
//   //   //       page: this.state.page + 1,
//   //   //       articles: parsedData.articles,
//   //   //       loading:false
//   //   //     })
//   //   //   }
//   //   // }
//   //   // catch (err) {
//   //   //   console.log(err)
//   //   // }
//   //   await this.setState({ page: this.state.page + 1 });
//   //   this.updateNews();

//   // }
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 })
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=497c75a234924072b3bc46edcb0f2bff&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,

//     })
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center" style={{ margin: '30px 0px' }}> NewsIt - Top {this.props.category} Headlines </h1>
//         {/* {this.state.loading && <Spinner />} */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           // loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {
//                 this.state.articles.map((element) => {
//                   return <div className="col-md-4" key={element.url}>
//                     <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
//                       description={element.description ? element.description.slice(0, 88) : ""}
//                       imageUrl={element.urlToImage} url={element.url ? element.url : ""} author={element.author}
//                       date={element.publishedAt} source={element.source.name}
//                     />
//                   </div>
//                 })}
//             </div>
//           </div>
//         </InfiniteScroll>

//         {/* <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}> &larr; Previous</button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div> */}
//       </>
//     )
//   }
// }

// export default News

//function based




import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
  

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c8411cef19a64d91ba26a47312b1ad7c&page=${page}&pageSize=${props.pageSize}`; 
        
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `NewsIt - ${(props.category)} `;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c8411cef19a64d91ba26a47312b1ad7c&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsIt - Top {(props.category)} Headlines</h1>
                
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                   
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News