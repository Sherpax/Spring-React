import {useState} from 'react'
import { Button } from '@mui/material';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from 'axios'

export default function Student() {

    const [name,setName] = useState('')
    const [address,setAddress] = useState('')

    const handleClick = (e) => {

        e.preventDefault();

        const student = {name,address}

         axios.post("http://localhost:8080/student/add", {
           name: student.name,
           address: student.address
        }).then(res => {
            console.log(res);
        });

    }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Add Student</h1>
      <TextField
        id="outlined-basic"
        label="Student Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Student Address"
        variant="outlined"
        value={address}
        fullWidth
        onChange={(e) => setAddress(e.target.value)}
      />
      
      <Button variant="contained" onClick={handleClick}>Add Student</Button>

    </Box>
  );
}
