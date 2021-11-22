import React from 'react';
import Plot from 'react-plotly.js';

class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stockChartXValuesTwo: [],
      stockChartYValuesTwo: [],
      stockChartXValuesThree: [],
      stockChartYValuesThree: [],
      stockChartXValuesFour: [],
      stockChartYValuesFour: [],
      stockChartXValuesFive: [],
      stockChartYValuesFive: [],
    }
  }

  componentDidMount() {
    this.fetchStock();
    this.fetchStockTwo();
    this.fetchStockThree();
    this.fetchStockFour();
    this.fetchStockFive();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = ['FB'];
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }
  fetchStockTwo() {
    const pointerToThisTwo = this;
    console.log(pointerToThisTwo);
    const API_KEY_Two = 'HGJWFG4N8AQ66ICD';
    let StockSymbolTwo = ['TSLA'];
    let API_Call_Two = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbolTwo}&outputsize=compact&apikey=${API_KEY_Two}`;
    let stockChartXValuesFunctionTwo = [];
    let stockChartYValuesFunctionTwo = [];

    fetch(API_Call_Two)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunctionTwo.push(key);
            stockChartYValuesFunctionTwo.push(data['Time Series (Daily)'][key]['1. open']);
          }

          pointerToThisTwo.setState({
            stockChartXValuesTwo: stockChartXValuesFunctionTwo,
            stockChartYValuesTwo: stockChartYValuesFunctionTwo
          });
        }
      )
  }
  fetchStockThree() {
    const pointerToThisThree = this;
    console.log(pointerToThisThree);
    const API_KEY_Three = 'HGJWFG4N8AQ66ICD';
    let StockSymbolThree = ['CSCO'];
    let API_Call_Three = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbolThree}&outputsize=compact&apikey=${API_KEY_Three}`;
    let stockChartXValuesFunctionThree = [];
    let stockChartYValuesFunctionThree = [];

    fetch(API_Call_Three)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunctionThree.push(key);
            stockChartYValuesFunctionThree.push(data['Time Series (Daily)'][key]['1. open']);
          }

          pointerToThisThree.setState({
            stockChartXValuesThree: stockChartXValuesFunctionThree,
            stockChartYValuesThree: stockChartYValuesFunctionThree
          });
        }
      )
  }
  fetchStockFour() {
    const pointerToThisFour = this;
    console.log(pointerToThisFour);
    const API_KEY_Four = 'HGJWFG4N8AQ66ICD';
    let StockSymbolFour = ['AAPL'];
    let API_Call_Four = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbolFour}&outputsize=compact&apikey=${API_KEY_Four}`;
    let stockChartXValuesFunctionFour = [];
    let stockChartYValuesFunctionFour = [];

    fetch(API_Call_Four)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunctionFour.push(key);
            stockChartYValuesFunctionFour.push(data['Time Series (Daily)'][key]['1. open']);
          }

          pointerToThisFour.setState({
            stockChartXValuesFour: stockChartXValuesFunctionFour,
            stockChartYValuesFour: stockChartYValuesFunctionFour
          });
        }
      )
  }
  fetchStockFive() {
    const pointerToThisFive = this;
    console.log(pointerToThisFive);
    const API_KEY_Five = 'HGJWFG4N8AQ66ICD';
    let StockSymbolFive = ['INTC'];
    let API_Call_Five = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbolFive}&outputsize=compact&apikey=${API_KEY_Five}`;
    let stockChartXValuesFunctionFive = [];
    let stockChartYValuesFunctionFive = [];

    fetch(API_Call_Five)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunctionFive.push(key);
            stockChartYValuesFunctionFive.push(data['Time Series (Daily)'][key]['1. open']);
          }

          pointerToThisFive.setState({
            stockChartXValuesFive: stockChartXValuesFunctionFive,
            stockChartYValuesFive: stockChartYValuesFunctionFive
          });
        }
      )
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1080, height: 720, title: 'FaceBook'}}
        />
        <Plot
          data={[
            {
              x: this.state.stockChartXValuesTwo,
              y: this.state.stockChartYValuesTwo,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1080, height: 720, title: 'Tesla'}}
        />
        <Plot
          data={[
            {
              x: this.state.stockChartXValuesThree,
              y: this.state.stockChartYValuesThree,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1080, height: 720, title: 'Cisco'}}
        />
        <Plot
          data={[
            {
              x: this.state.stockChartXValuesFour,
              y: this.state.stockChartYValuesFour,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1080, height: 720, title: 'Apple'}}
        />
        <Plot
          data={[
            {
              x: this.state.stockChartXValuesFive,
              y: this.state.stockChartYValuesFive,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1080, height: 720, title: 'Intel'}}
        />
      </div>
    )
  }
}

export default Stocks;