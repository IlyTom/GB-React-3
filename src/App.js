import React from 'react';  
import { Container, Typography } from '@mui/material';  
import TemperatureConverter from './components/TemperatureConverter';  
import TodoList from './components/TodoList';  

const App = () => {  
    return (  
        <Container>  
            <Typography variant="h4" component="h1" gutterBottom>  
                Температурный конвертер  
            </Typography>  
            <TemperatureConverter />  
            <Typography variant="h4" component="h1" gutterBottom style={{ marginTop: '2rem' }}>  
                Список дел  
            </Typography>  
            <TodoList />  
        </Container>  
    );  
};  

export default App;  