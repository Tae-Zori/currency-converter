import { ThemeProvider, createTheme } from '@mui/material';
import {blueGrey} from '@mui/material/colors';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const theme = createTheme({
  palette: {
     primary: { 
       light: blueGrey["A200"],
       main: blueGrey[400],
       dark: blueGrey[900],
       contrastText: blueGrey[50],
     },
   secondary: {
     main: blueGrey[400],
     
   },
 }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
            <Header/>
            <Main/>
        </div>
      </ThemeProvider>
  );
}

export default App;
