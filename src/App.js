// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// // import { Router } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
//   pageSize = 6;

//   state = {
//     progress: 0
//   }

//  setProgress = (progress) => {
//   this.setState({ progress: progress })
// }
// render() {
//   return (
//     <div>
//       <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         height={3}
//       // onLoaderFinished={() => setProgress(0)}
//       />

//       <Router>
//         <Navbar />
//         <Routes>

//           <Route exact path="/news-it" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="General" />}></Route>
//           {/* <Route exact path="/international" element={<News setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country="us" category="General"/>}></Route> */}
//           <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
//           <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
//           <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="General" />}></Route>
//           <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
//           <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
//           <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>
//           <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>



//         </Routes>
//       </Router>
//     </div>
//   )
// }
// }




// function based



import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;

  state = {
    progress: 0
  }

 setProgress = (progress) => {
  this.setState({ progress: progress })
}
render() {
  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      // onLoaderFinished={() => setProgress(0)}
      />

      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/news-it" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="General" />}></Route>
          {/* <Route exact path="/international" element={<News setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country="us" category="General"/>}></Route> */}
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="General" />}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>



        </Routes>
      </Router>
    </div>
  )
}
}



