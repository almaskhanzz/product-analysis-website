import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css';
const DashBoard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, []);
    return (
        <div className='dashBoard-container'>
            <div className='line-chart'>
                <LineChart width={550} height={300} data={charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey={'sell'} stroke="#8884d8"></Line>
                    <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            <div className='area-chart'>
                <AreaChart width={550} height={300} data={charts} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>

        </div>
    );
};

export default DashBoard;