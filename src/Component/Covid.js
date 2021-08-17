import React, { useEffect, useState } from 'react'
import './Covid.css'

function Covid() {
    const [data, setData] = useState([]);
    const getCovidLiveData = async () => {
        try {
            // calling api 
            const responce = await fetch('https://api.covid19india.org/data.json');
            const realData = await responce.json();
            // set the data 
            setData(realData.statewise[0])
        } catch (err) {
            console.log(err);
        }
    }

    // code for the time and date 
    let a;
    let date;
    let time;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setInterval(() => {
        a = new Date();
        date = a.toLocaleDateString(undefined, options);
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
        document.getElementById('time').innerHTML = time + "<br> " + date;
    }, 1000);

    // arrow function for the showing effect of covid live data 
    useEffect(() => {
        getCovidLiveData();
    }, [])
    return (
        <>
            <section id="covid">
                <h2 id="covid-head">COVID-19 <span className="livesym">🔴</span>LIVE TRACKER</h2>
                <p className="display-4 date">Time : <span id="time"></span></p>
                {/* code for the boxes */}
                <div className="container">
                    <div className="row">
                        <div className=" row-ki-au ">
                            <div className="country"><span className="span">OUR</span>  COUNTRY</div>
                            <h1>INDIA</h1>
                        </div>
                        <div className=" row-ki-au ">
                            <div className="country"><span className="span">TOTAL</span>  RECOVERED</div>
                            <div className="cases-covid">{data.recovered}</div>
                        </div>
                        <div className=" row-ki-au ">
                            <div className="country"><span className="span">TOTAL</span>  CONFIRMED</div>
                            <div className="cases-covid">{data.confirmed}</div>
                        </div>
                        <div className=" row-ki-au ">
                            <div className="country"><span className="span">TOTAL</span>  DEATHS</div>
                            <div className="cases-covid">{data.deaths}</div>
                        </div>
                        <div className=" row-ki-au ">
                            <div className="country"><span className="span">TOTAL</span>  ACTIVE</div>
                            <div className="cases-covid">{data.active}</div>
                        </div>
                        <div className=" row-ki-au ">
                            <div className="country"><span className="span">TOTAL</span>  UPDATED</div>
                            <div className="cases-covid">{data.lastupdatedtime}</div>
                        </div>
                    </div>
                </div>
                {/* footer section code  */}
            </section>

        </>
    )
}

export default Covid
