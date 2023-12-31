import Box from '@mui/material/Box'
import { CssBaseline } from '@mui/material';
import Header from 'Component/Header';
import './App.css';

function App() {
  return (
    <>
    <CssBaseline/>
    <Box sx = {{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <Box>
        <Header/>
      </Box>

    </Box>

    </>
  );
}

export default App;
