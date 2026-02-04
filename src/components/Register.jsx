import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    email: "",
    phone: ""
  });

  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit / update
  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.age ||
      !formData.course ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = students.map((s, i) =>
        i === editIndex ? formData : s
      );
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, formData]);
    }

    setFormData({
      name: "",
      age: "",
      course: "",
      email: "",
      phone: ""
    });
  };

  const handleEdit = (index) => {
    setFormData(students[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          <PersonAddIcon /> Course Registration
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              SelectProps={{ native: true }}
            >
              <option value=""></option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
              <option value="C#">C#</option>
              <option value="Web Development">Web Development</option>
            </TextField>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button variant="contained" onClick={handleSubmit}>
            {editIndex !== null ? "Update" : "Register"}
          </Button>
        </Box>
      </Paper>

      {students.length > 0 && (
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Registered Students
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {students.map((s, i) => (
                  <TableRow key={i}>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.age}</TableCell>
                    <TableCell>{s.email}</TableCell>
                    <TableCell>{s.phone}</TableCell>
                    <TableCell>{s.course}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => handleEdit(i)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(i)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  );
};
