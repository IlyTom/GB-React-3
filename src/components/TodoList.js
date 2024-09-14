import React, { useState } from 'react';  
import { TextField, Button, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';  
import DeleteIcon from '@mui/icons-material/Delete';  

const TodoList = () => {  
    const [task, setTask] = useState('');  
    const [tasks, setTasks] = useState([]);  

    const handleAddTask = () => {  
        if (task.trim() !== '') {  
            setTasks([...tasks, task]);  
            setTask('');  
        }  
    };  

    const handleDeleteTask = (index) => {  
        const newTasks = tasks.filter((_, i) => i !== index);  
        setTasks(newTasks);  
    };  

    return (  
        <Box sx={{ width: '300px' }}>  
            <TextField  
                label="Новая задача"  
                value={task}  
                onChange={(e) => setTask(e.target.value)}  
                variant="outlined"  
                fullWidth  
            />  
            <Button   
                variant="contained"   
                onClick={handleAddTask}   
                sx={{ marginTop: 2 }}  
            >  
                Добавить задачу  
            </Button>  
            <List sx={{ marginTop: 2 }}>  
                {tasks.map((task, index) => (  
                    <ListItem key={index} secondaryAction={  
                        <IconButton edge="end" onClick={() => handleDeleteTask(index)}>  
                            <DeleteIcon />  
                        </IconButton>  
                    }>  
                        <ListItemText primary={task} />  
                    </ListItem>  
                ))}  
            </List>  
        </Box>  
    );  
};  

export default TodoList;