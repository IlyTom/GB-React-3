import React, { useState } from 'react';  
import { TextField, Button, Box } from '@mui/material';  

const TemperatureConverter = () => {  
    const [celsius, setCelsius] = useState('');  
    const [fahrenheit, setFahrenheit] = useState('');  

    const handleCelsiusChange = (event) => {  
        const value = event.target.value;  
        setCelsius(value);  
        if (value !== '') {  
            setFahrenheit((value * 9/5) + 32);  
        } else {  
            setFahrenheit('');  
        }  
    };  

    const handleFahrenheitChange = (event) => {  
        const value = event.target.value;  
        setFahrenheit(value);  
        if (value !== '') {  
            setCelsius((value - 32) * 5/9);  
        } else {  
            setCelsius('');  
        }  
    };  

    return (  
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>  
            <TextField  
                label="Цельсий (°C)"  
                type="number"  
                value={celsius}  
                onChange={handleCelsiusChange}  
                variant="outlined"  
            />  
            <TextField  
                label="Фаренгейт (°F)"  
                type="number"  
                value={fahrenheit}  
                onChange={handleFahrenheitChange}  
                variant="outlined"  
            />  
        </Box>  
    );  
};  

export default TemperatureConverter;  