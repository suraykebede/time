import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Modal,
  Backdrop,
  Fade,
  MenuItem,
  Select,
  InputAdornment,
  Box
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectId, setProjectId] = useState(uuidv4()); // Generate unique ID on component mount
  const [clientId, setClientId] = useState('');
  const [allocatedHours, setAllocatedHours] = useState('');
  const [contactPerson, setContactPerson] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setProjectId(uuidv4()); // Generate new ID on each modal open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProjectName('');
    setClientId('');
    setAllocatedHours('');
    setContactPerson('');
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleClientIdChange = (event) => {
    setClientId(event.target.value);
  };

  const handleAllocatedHoursChange = (event) => {
    setAllocatedHours(event.target.value);
  };

  const handleContactPersonChange = (event) => {
    setContactPerson(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      id: projectId,
      name: projectName,
      clientId,
      allocatedHours: allocatedHours,
      contactPerson: contactPerson,
    };

    setProjects([...projects, newProject]);
    handleCloseModal();
  };

  // Sample client data (replace with your actual data)
  const clients = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
    { id: 3, name: 'Client C' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Create New Project
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h5" component="h2" id="transition-modal-title">
              Create New Project
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    variant="outlined"
                    value={projectName}
                    onChange={handleProjectNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project ID"
                    variant="outlined"
                    value={projectId}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography variant="caption">ID:</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    fullWidth
                    label="Client"
                    value={clientId}
                    onChange={handleClientIdChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {clients.map((client) => (
                      <MenuItem key={client.id} value={client.id}>
                        {client.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Allocated Hours"
                    variant="outlined"
                    type="number"
                    value={allocatedHours}
                    onChange={handleAllocatedHoursChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact Person"
                    variant="outlined"
                    value={contactPerson}
                    onChange={handleContactPersonChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Create Project
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Fade>
      </Modal>

      <Typography variant="h4" component="h2" style={{ marginTop: '2rem' }}>
        Project List
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Allocated Hours</TableCell>
            <TableCell>Contact Person</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.id}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>{clients.find((c) => c.id === project.clientId)?.name || 'N/A'}</TableCell>
              <TableCell>{project.allocatedHours || 'N/A'}</TableCell>
              <TableCell>{project.contactPerson || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Projects;