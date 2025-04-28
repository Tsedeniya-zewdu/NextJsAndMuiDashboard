'use client';
import { 
  Box,
  Checkbox,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Chip,
  SelectChangeEvent,
  Avatar,
  Stack
} from '@mui/material';
import { ArrowLeft, ArrowRight, Edit, Delete } from '@mui/icons-material';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  budget: string;
  members: { name: string; avatar?: string }[];
  status: 'Active' | 'Urgent' | 'On Hand';
  deadline: string;
  calendarDate: string;
}

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const projects: Project[] = [
    { 
      id: 1, 
      title: 'Deploy The App To App Stores', 
      budget: '$100.5k',
      members: [
        { name: 'Sophia Williams', avatar: 'women.avif' },
        { name: 'Noah Taylor', avatar: 'women.avif' }
      ],
      status: 'Active',
      deadline: '08 Mar 2024',
      calendarDate: '08 Mar 2024'
    },
    { 
      id: 2, 
      title: 'Conduct User Acceptance Testing', 
      budget: '$68k',
      members: [
        { name: 'Emma Anderson', avatar: 'women.avif' }
      ],
      status: 'Urgent',
      deadline: '12 Mar 2024',
      calendarDate: '10 Mar 2024'
    },
    { 
      id: 3, 
      title: 'Optimize App Performance', 
      budget: '$90.5k',
      members: [
        { name: 'Alexander White', avatar: 'women.avif' },
        { name: 'Liam Martinez', avatar: 'women.avif' }
      ],
      status: 'On Hand',
      deadline: '25 Mar 2024',
      calendarDate: '15 Mar 2024'
    },
    { 
      id: 4, 
      title: 'Design The Product UI/UX', 
      budget: '$120k',
      members: [
        { name: 'Olivia Garcia', avatar: 'women.avif' },
        { name: 'William Rodriguez', avatar: 'women.avif' }
      ],
      status: 'Active',
      deadline: '06 Apr 2024',
      calendarDate: '01 Apr 2024'
    },
    // Add more projects as needed
  ];

  // Pagination calculations
  const totalItems = projects.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalItems);
  const currentProjects = projects.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return '#e8f5e9';
      case 'Urgent': return '#ffebee';
      case 'On Hand': return '#fff3e0';
      default: return '#f5f5f5';
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    const newRows = Number(event.target.value);
    setRowsPerPage(newRows);
    setCurrentPage(1);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        All Projects
      </Typography>

      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox"></TableCell>
            <TableCell>Project</TableCell>
            <TableCell align="center">Budget</TableCell>
            <TableCell align="center">Members</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Calendar</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Typography fontWeight="500">{project.title}</Typography>
              </TableCell>
              <TableCell align="center">{project.budget}</TableCell>
              <TableCell align="center">
                <Stack direction="row" spacing={1} justifyContent="center">
                  {project.members.map((member, index) => (
                    <Avatar 
                      key={index} 
                      src={member.avatar} 
                      sx={{ width: 32, height: 32 }}
                    >
                      {!member.avatar && member.name.charAt(0)}
                    </Avatar>
                  ))}
                </Stack>
              </TableCell>
              <TableCell align="center">
                <Chip 
                  label={project.status}
                  sx={{ 
                    backgroundColor: getStatusColor(project.status),
                    color: 'text.primary'
                  }}
                />
              </TableCell>
              <TableCell align="center">{project.deadline}</TableCell>
              <TableCell align="center">{project.calendarDate}</TableCell>
              <TableCell align="right">
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                  <IconButton aria-label="edit">
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete" color="error">
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography>Items per page:</Typography>
          <Select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            size="small"
          >
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </Box>

        <Typography>
          {`${startIndex + 1} – ${endIndex} of ${totalItems}`}
        </Typography>

        <Box>
          <IconButton 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft />
          </IconButton>
          <IconButton 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectList;