import { Grid, CardContent, Typography, Paper, List, Box, ListItem, Divider } from '@mui/material';

interface Event {
  time: string;
  title: string;
}

const CalendarComponent = () => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const calendarDates = [
    [null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, null, null, null]
  ];
  const events: Event[] = [
    { time: '7:30 AM - 10:00 AM', title: 'Meeting with Developers' },
    { time: '10:30 AM - 12:00 PM', title: 'Develop A Marketing Strategy' },
    { time: '2:30 PM - 6:20 PM', title: 'Prepare For App Deployment' }
  ];

  return (
    <Grid container size={{xs:12,md:7}} >
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Calendar
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
          January
        </Typography>

        
        <Grid container sx={{ 
          mb: 2,
          display: 'flex',
          flexWrap: 'nowrap',
          overflow: 'hidden'
        }}>
          {daysOfWeek.map((day, index) => (
            <Grid key={`day-${index}`} sx={{ 
              flex: '1 0 calc(100% / 7)',
              minWidth: 0,
              textAlign: 'center'
            }}>
              <Typography variant="body2" color="text.secondary">
                {day}
              </Typography>
            </Grid>
          ))}
        </Grid>

       
        {calendarDates.map((week, weekIndex) => (
          <Grid container key={`week-${weekIndex}`} sx={{ 
            mb: 1,
            display: 'flex',
            flexWrap: 'nowrap'
          }}>
            {week.map((date, dayIndex) => (
              <Grid key={`date-${weekIndex}-${dayIndex}`} sx={{ 
                flex: '1 0 calc(100% / 7)',
                minWidth: 0,
                textAlign: 'center',
                p: 0.5
              }}>
                <Paper elevation={date ? 1 : 0} sx={{ 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: date ? 'background.paper' : 'transparent'
                }}>
                  <Typography variant="body2">
                    {date || ''}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </CardContent>

      <Grid size={{xs:12}}>
        <CardContent>
          <List disablePadding>
            {events.map((event, index) => (
              <Box key={`event-${index}`}>
                <ListItem disableGutters sx={{ 
                  py: 1.5, 
                  flexDirection: 'column', 
                  alignItems: 'stretch'
                }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {`${index + 1}. ${event.title}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.time}
                  </Typography>
                </ListItem>
                {index < events.length - 1 && <Divider key={`divider-${index}`} />}
              </Box>
            ))}
          </List>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default CalendarComponent;