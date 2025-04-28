import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Piechart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Completed' ,color:'rgb(255, 165, 203)'},
            { id: 1, value: 15, label: 'Active',color:'rgb(147, 120, 201)' },
            { id: 3, value: 20, label: 'Assigned',color:'rgb(255, 207, 159)' },
            { id: 4, value: 15, label: 'Pending',color:'rgb(165, 223, 223)' },
            { id: 5, value: 20, label: 'In progress',color:'#82f0ff' },
          ],
        },
      ]}
      width={200}
      height={200}
    />
  );
}