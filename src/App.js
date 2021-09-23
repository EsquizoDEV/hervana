import { NavBar } from './components/navigation/NavBar';
import { Footer } from './components/core/Footer';
import { ThemeProvider } from '@mui/material';
import theme from './theme/mainTheme'
import CarrouselStyled from './components/UXComponents/carrousel';

const  App = () => {
  

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
  
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <CarrouselStyled/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;