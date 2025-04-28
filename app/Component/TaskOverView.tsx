'use client';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const data = [
  { month: 'Jan', revenue: 800, projects: 2400, active: 2400 },
  { month: 'Feb', revenue: 600, projects: 1398, active: 2210 },
  { month: 'Mar', revenue: 400, projects: 9800, active: 2290 },
  { month: 'Apr', revenue: 550, projects: 3908, active: 2000 },
  { month: 'May', revenue: 300, projects: 4800, active: 2181 },
  { month: 'Jun', revenue: 450, projects: 3800, active: 2500 },
  { month: 'Jul', revenue: 700, projects: 4300, active: 2100 },
  { month: 'Aug', revenue: 800, projects: 2400, active: 2400 },
  { month: 'Sep', revenue: 600, projects: 1398, active: 2210 },
  { month: 'Oct', revenue: 400, projects: 9800, active: 2290 },
  { month: 'Nov', revenue: 550, projects: 3908, active: 2000 },
  { month: 'Dec', revenue: 300, projects: 4800, active: 2181 },
];

export default function CombinedChart() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tasks Overview
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
          {['Revenue', 'Number of Project', 'Active Project'].map((item) => (
            <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ 
                width: 16,
                height: 16,
                backgroundColor: 
                  item === 'Revenue' ? '#8884d8' :
                  item === 'Number of Project' ? '#82ca9d' : '#ffc658'
              }} />
              <Typography variant="body2">{item}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <defs>
                <linearGradient id="projectsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff0000" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ff0000" stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" domain={[0, 1000]} />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />

              {/* Bar Chart for Revenue (shorter) */}
              <Bar
                yAxisId="left"
                dataKey="revenue"
                fill="#8884d8"
                name="Revenue"
                barSize={20}
              />

              {/* Red background for Projects */}
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="projects"
                fill="url(#projectsFill)"
                strokeWidth={0}
              />

              {/* Line Chart for Projects */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="projects"
                stroke="#82ca9d"
                strokeWidth={2}
                name="Number of Project"
              />

              {/* Line Chart for Active Projects */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="active"
                stroke="#ffc658"
                strokeWidth={2}
                name="Active Project"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}