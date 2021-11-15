import React, {Component} from 'react'
import "./Home.css"
import DonutChart from '../Chart.js/DonutChart';

class Home extends Component {
    render() {
        return (
            <div>
            <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}} >Welcome</h1>
            <div>
                <DonutChart />
            </div>
            </div>
         );
    }
}
export default Home;