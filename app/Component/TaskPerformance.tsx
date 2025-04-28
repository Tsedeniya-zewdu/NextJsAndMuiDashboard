'use client';
import { Box, Card, CardContent,Grid, Typography, useTheme } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import Piechart from './Piechart';

interface PerformanceMetric {
  title: string;
  value: string;
  trend: 'up' | 'down';
}

const TasksPerformance = () => {
  const theme = useTheme();
  
  const metrics: PerformanceMetric[] = [
    { title: 'Target', value: '18k', trend: 'up' },
    { title: 'Last Week', value: '5.21k', trend: 'down' },
    { title: 'Last Month', value: '32k', trend: 'up' },
  ];

  const statusItems = ['Completed', 'Active', 'Assigned', 'Pending', 'In Progress'];

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Tasks Performance
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
          {statusItems.map((item) => (
            <Typography key={item} variant="body2" color="text.secondary">
              {item}
            </Typography>
          ))}
        </Box>
        <Piechart />
        <Grid container spacing={3}>
          {metrics.map((metric) => (
            <Grid size={{xs:12, sm:6, md:4}} key={metric.title}>
              <Box sx={{ 
                p: 2,
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper
              }}>
                <Typography variant="body2" color="text.secondary">
                  {metric.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="h6">{metric.value}</Typography>
                  {metric.trend === 'up' ? (
                    <ArrowUpward color="success" fontSize="small" />
                  ) : (
                    <ArrowDownward color="error" fontSize="small" />
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
       
      </CardContent>
    </Card>
  );
};

export default TasksPerformance;