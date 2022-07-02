import React from 'react';
import Chart, { IChartDataPoints } from '../Chart/Chart';
import ChartBar, { IChartBar } from '../Chart/ChartBar';
import { IExpenseItems } from './Expenses';



const ExpensesChart = ({ items }: IExpenseItems) => {

    const chartData: IChartDataPoints = {
        dataPoints: [
            { label: 'Jan', value: 0, maxValue: 0 },
            { label: 'Feb', value: 0, maxValue: 0 },
            { label: 'Mar', value: 0, maxValue: 0 },
            { label: 'Apr', value: 0, maxValue: 0 },
            { label: 'May', value: 0, maxValue: 0 },
            { label: 'Jun', value: 0, maxValue: 0 },
            { label: 'Jul', value: 0, maxValue: 0 },
            { label: 'Aug', value: 0, maxValue: 0 },
            { label: 'Sep', value: 0, maxValue: 0 },
            { label: 'Oct', value: 0, maxValue: 0 },
            { label: 'Nov', value: 0, maxValue: 0 },
            { label: 'Dec', value: 0, maxValue: 0 },
        ]
    };

    for (const item of items) {
        console.log(item);
        const itemMonth = item.date.getMonth();
        chartData.dataPoints[itemMonth].value += item.cost;
    }

    return <Chart dataPoints={chartData.dataPoints} />
}

export default ExpensesChart;