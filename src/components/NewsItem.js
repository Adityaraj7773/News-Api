// import React, { Component } from 'react'

// export class NewsItem extends Component {
    
//   render() {
//    let  {title,description,imageUrl,url,author,date,source} = this.props;
//     return (
//       <div className='my-3'>
//         <div className="card">
//           <div style={{
//             display:'flex',
//             justifyContent:'flex-start',
//             position:'absolute',
//             left:'0'
//           }}>
//             <span className=' badge rounde-pill bg-secondary' >{source}
//             </span>
//             </div>
//   <img src={!imageUrl?"https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM=":imageUrl}
//    className="card-img-top" alt=""/>
//   <div className="card-body">
//     <h5 className="card-title">{title}...</h5>
//     <p className="card-text">{description}...</p>
//     <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()} </small></p>
//     <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary">Read More...</a>
//   </div>
// </div>
//       </div>
//     )
//   }
// }

// export default NewsItem









// function based

import React from 'react'
import { Link } from 'react-router-dom';
const NewsItem = (props)=> {
    
   let  {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-start',
            position:'absolute',
            left:'0'
          }}>
            <span className=' badge rounde-pill bg-secondary' >{source}</span>
            </div>

  <img src={!imageUrl?"https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM=":imageUrl}
   className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()} </small></p>
    <Link to={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary">Read More...</Link>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
