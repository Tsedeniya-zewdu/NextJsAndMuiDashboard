'use client';
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography, Box } from '@mui/material';

export default function Barchart() {
  return (
    <Box sx={{ width: '100%', height: '100%', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Issue Summary
      </Typography>

      <Box sx={{ width: '100%', height: 350, position: 'relative' }}>
        <BarChart
        height={350}
          sx={{ zIndex: 0 }}
          xAxis={[
            {
              scaleType: 'band',
              data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            },
          ]}
          yAxis={[{ min: 0, max: 350 }]}
          series={[
            {
              data: [180, 210, 250, 200, 170, 220, 260],
              stack: 'A',
              label: 'Fixed',
              color: '#be94f2',
            },
            {
              data: [60, 80, 75, 90, 110, 100, 200],
              stack: 'A',
              label: 'Closed',
              color: '#2474e3',
            },
            {
              data: [250, 280, 200, 200, 190, 170, 240],
              stack: 'A',
              label: 'New',
              color: '#f7e4f3',
            },
          ]}
          slotProps={{
            bar: {
              style: {
                width: 40,
              },
            },
           
          }}
        />
      </Box>
    </Box>
  );
}
