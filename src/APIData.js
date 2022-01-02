import React, { useEffect, useState } from 'react';
import './table.css'

const APIData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (

        <div >

            <h1 style={{ fontFamily: 'cursive', textAlign: 'center', color:'#aa6804'}}>India Covid 19 Dashboard</h1>
            <p style={{ 
             textAlign: 'center', 
             marginLeft: '50px', 
             marginRight: '50px',
             width: '92%'}}>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <table >
                
                <thead>
                    <tr>
                        <th>Daily confirmed</th>
                        <th>Daily deceased</th>
                        <th>Daily recovered</th>
                        <th>Date</th>
                        <th>Dateymd</th>
                        <th>Total confirmed</th>
                        <th>Total recovered</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.dailyconfirmed}</td>
                                    <td>{curElem.dailydeceased}</td>
                                    <td>{curElem.dailyrecovered}</td>
                                    <td>{curElem.date}</td>
                                    <td>{curElem.dateymd}</td>
                                    <td>{curElem.totalconfirmed}</td>
                                    <td>{curElem.totalrecovered}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>
    );

}

export default APIData;