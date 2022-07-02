import React from 'react'
import ChartBar, { IChartBar } from './ChartBar';
import "./Chart.css"

export interface IChartDataPoints {
    dataPoints: IChartBar[];
}

const Chart = ({ dataPoints }: IChartDataPoints) => {

    const values = dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...values);

    return <div className="chart">
        {dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                label={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMax} />)}
    </div>
};


export default Chart;