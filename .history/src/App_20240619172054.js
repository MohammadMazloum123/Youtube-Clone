import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material";


const App = () => {
return (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<}/>
                <Route/>
                <Route/>
            </Routes>
        </Box>
    </BrowserRouter>
)
}

export default App
