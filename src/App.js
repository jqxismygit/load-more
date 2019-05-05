import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
const LOAD_ONE_TIME = 10;

class App extends Component {

  constructor(props) {
    super(props);
    this.loadIndex = 0;
    this.state = {
      loadIndex: 0
    }
  }

  render() {
    const catalog = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    return (
      <div className="App">
        <input className="search" type="search" ></input>
        <div className="container" ref={(ref) => {
          const nDivHight = $(ref).height();
          let that = this;
          $(ref).scroll(function () {
            let nScrollHight = $(this)[0].scrollHeight;
            let nScrollTop = $(this)[0].scrollTop;
            if (nScrollTop + nDivHight >= nScrollHight) {
              if ((that.loadIndex * LOAD_ONE_TIME) < listData.length) {
                that.loadIndex++;
                that.setState({ loadIndex: that.loadIndex });
                console.log('加载更多----->>>');
              }
            }
          });
        }}>
          <div className="barner"></div>
          <div className="catalog">
            {
              catalog && catalog.map((c, idx) => {
                return (
                  <div className="catalogItem" key={c}>

                  </div>
                )
              })
            }
          </div>
          {
            listData && listData.slice(0, LOAD_ONE_TIME * (this.loadIndex + 1)).map((c, idx) => {
              return (
                <div className="listItem" key={c}>
                  {c}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;