

import { Box, Stack, Typography,} from "@mui/material";
import Paper from '@mui/material/Paper';
import Barchart from "./Component/Barchart";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import TodoList from "./Component/TodoList";
import TasksPerformance from "./Component/TaskPerformance";
import TasksOverview from "./Component/TaskOverView";
import ProjectsList from "./Component/ProjectList";
import CalendarView from "./Component/CalendarView";


const icons =[{
  color:'#3761EE',icon:<AccessTimeIcon sx={{color:'white'}}/>,title:'Total Project',number:'4,258',Srate:'This month',persent:'2.60%'

},
{color:'#EE8336',icon:<AlarmOnOutlinedIcon sx={{color:'white'}} />,title:'Active Projects',number:'58',Srate:'completed',persent:'65.0%'

},
{color:'#2DB6F5',icon:<AccessTimeIcon sx={{color:'white'}}/>,title:'Hours Spent',number:'271h 30m',Srate:'status',persent:'5.90%'

},
{color:'#EE368C',icon: <PersonOutlineOutlinedIcon sx={{color:'white'}}/>,title:'Members',number:'142',Srate:'Leads',persent:'2.60%'

},
{color:'#3761EE',icon:<ErrorOutlineOutlinedIcon sx={{color:'white'}}/>,title:'Due Tasks',number:'185',Srate:'incomplete',persent:'4.70%'

},
{color:'#00B69B',icon:<AlignVerticalBottomOutlinedIcon sx={{color:'white'}}/>,title:'Productivity',number:'94%',Srate:'increase',persent:'3.96%'

},]

export default function Home() {

  return (

    <Box style={{width:'100%'}}>
      
   <Box sx={{
    width:'100%',
    display: 'flex',
    height:'auto',
    justifyContent:'center',
   }}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width:{lg:'100%',md:'90vw',sm:'100vw',xs:'100vw'},
        height:'auto',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: '250px',
          height: 'auto',
          p: 5,
        },
      }}
    >
      {icons.map((item, index) => (
        <Paper key={index} elevation={3} sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>
          <Stack spacing={1} sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>
            <Box sx={{ height:'62px', width:'62px', backgroundColor: item.color, fontSize: 32,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10px'}}>{item.icon}</Box>
            <Typography variant="h6" sx={{textAlign:'center' ,color:'#77838f'}}>{item.title}</Typography>
            <Typography sx={{textAlign:'center' }} variant="h4" fontWeight="bold">
              {item.number}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',color:'#77838f' }}>
              {item.Srate}
            </Typography>
            <Typography variant="body1" fontWeight="medium" sx={{textAlign:'center',color:'#77838f' }}>
              {item.persent}
            </Typography>
          </Stack>
        </Paper>
      ))}
    </Box >
    </Box>
    <Box sx={{display:'flex',gap:'20px',justifyContent:'center',alignItems:{lg:'flex-start',md:"center",sm:'center',xs:'center'},marginTop:'50px',
      flexDirection:{lg:'row',md:'column',sm:'column',xs:'column'}
    }}> 
    <Box sx={{width:{lg:'790px',md:'700px',sm:'600px',xs:'450px'},height:'auto',backgroundColor:'white'}}>
    <Barchart />
    </Box>
   
   <Box sx={{width:{lg:'790px',md:'700px',sm:'600px',xs:'450px'},height:'auto',backgroundColor:'white'}}>
<TodoList />
   </Box>
   </Box>
   <Box sx={{display:'flex',gap:'20px',justifyContent:'center',alignItems:{lg:'flex-start',md:"center",sm:'center',xs:'center'},marginTop:'50px',
      flexDirection:{lg:'row',md:'column',sm:'column',xs:'column'}
    }}> 
    <Box sx={{width:{lg:'790px',md:'700px',sm:'600px',xs:'450px'},height:'auto',backgroundColor:'white'}}>
   <TasksPerformance />
    </Box>
   
   <Box sx={{width:{lg:'790px',md:'700px',sm:'600px',xs:'450px'},height:'auto',backgroundColor:'white'}}>
<TasksOverview />
   </Box>
   </Box>
   <Box sx={{display:'flex',gap:'20px',justifyContent:'center',alignItems:{lg:'flex-start',md:"center",sm:'center',xs:'center'},marginTop:'50px',
      flexDirection:{lg:'row',md:'column',sm:'column',xs:'column'}
    }}> 
    <Box sx={{width:{lg:'990px',md:'700px',sm:'600px',xs:'450px'},height:'auto',backgroundColor:'white'}}>
  <ProjectsList />
    </Box>
   
   <Box sx={{width:{lg:'590px',md:'700px',sm:'600px',xs:'450px'},height:'auto',backgroundColor:'white'}}>
<CalendarView />
   </Box>
   </Box>
    </Box>
  );
}
