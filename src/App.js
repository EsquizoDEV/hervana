import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './history';
import { styled } from '@material-ui/styles'
import { Paper } from '@material-ui/core'
import LandingPage from './views/landing/LandingPage';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const  App = () => {

  return (
      
   <Router history={history}>
       <Switch>
           <Route path="/" exaxt={true} component={LandingPage}></Route>
       </Switch>
   </Router>
  );
}

export default App;