import { ThemeProvider } from '@mui/material';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './history.js'
import LandingPage from './views/landing/LandingPage';
import theme from './theme/mainTheme'


const  App = () => {

  return (
      
     <ThemeProvider theme={theme}>
        <Router history={history}>
            <Switch>
                <Route path="/" exaxt={true} component={LandingPage}></Route>
            </Switch>
        </Router>
     </ThemeProvider>
  );
}

export default App;