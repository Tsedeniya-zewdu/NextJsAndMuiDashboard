'use client';
import { 
    Box,
    Checkbox,
    Container,
    TextField,
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
    SelectChangeEvent
  } from '@mui/material';
  import { ArrowLeft, ArrowRight, Edit, Delete } from '@mui/icons-material';
  import { useState } from 'react';
  
  interface Task {
    id: number;
    title: string;
    status: 'Active' | 'Urgent' | 'On Hand';
    assignedTo: string;
    deadline: string;
  }
  
  const TodoList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    
    // Generate 12 sample tasks
    const tasks: Task[] = [
      { id: 1, title: 'Perform Unit Testing', status: 'Active', assignedTo: 'Sophia Williams', deadline: 'Due in 3 days' },
      { id: 2, title: 'Create Wireframes', status: 'Urgent', assignedTo: 'Noah Taylor', deadline: 'Due in 1 day' },
      { id: 3, title: 'User Stories & Use Cases', status: 'On Hand', assignedTo: 'Emma Anderson', deadline: 'Due in 4 days' },
      { id: 4, title: 'Create A Project Plan', status: 'Active', assignedTo: 'Alexander White', deadline: 'Due in 3 days' },
      { id: 5, title: 'Develop API Endpoints', status: 'Urgent', assignedTo: 'Liam Martinez', deadline: 'Due in 2 days' },
      { id: 6, title: 'Design Database Schema', status: 'Active', assignedTo: 'Olivia Garcia', deadline: 'Due in 5 days' },
      { id: 7, title: 'Implement UI Components', status: 'On Hand', assignedTo: 'William Rodriguez', deadline: 'Due in 3 days' },
      { id: 8, title: 'Write Documentation', status: 'Active', assignedTo: 'Isabella Lopez', deadline: 'Due in 4 days' },
      { id: 9, title: 'Conduct Code Review', status: 'Urgent', assignedTo: 'James Brown', deadline: 'Due in 1 day' },
      { id: 10, title: 'Optimize Performance', status: 'On Hand', assignedTo: 'Charlotte Davis', deadline: 'Due in 6 days' },
      { id: 11, title: 'Set Up CI/CD Pipeline', status: 'Active', assignedTo: 'Benjamin Wilson', deadline: 'Due in 3 days' },
      { id: 12, title: 'Prepare Deployment', status: 'Urgent', assignedTo: 'Amelia Moore', deadline: 'Due in 2 days' },
    ];
  
    // Pagination calculations
    const totalItems = tasks.length;
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, totalItems);
    const currentTasks = tasks.slice(startIndex, endIndex);
  
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
      setCurrentPage(1); // Reset to first page when changing rows per page
    };
  
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          To Do List
        </Typography>
  
        <TextField
          fullWidth
          placeholder="Search here.."
          sx={{ mb: 3 }}
          variant="outlined"
        />
  
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
            <TableCell></TableCell>
              <TableCell>Task</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Assigned To</TableCell>
              <TableCell align="center">Deadline</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Typography fontWeight="500">{task.title}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip 
                    label={task.status}
                    sx={{ 
                      backgroundColor: getStatusColor(task.status),
                      color: 'text.primary'
                    }}
                  />
                </TableCell>
                <TableCell align="center">{task.assignedTo}</TableCell>
                <TableCell align="center">{task.deadline}</TableCell>
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
  
  export default TodoList;