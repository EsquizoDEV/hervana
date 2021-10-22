import { ThemeProvider } from '@mui/material';
import { Router, Switch, Route} from 'react-router-dom'
import history from './history.js'
import { lazy } from 'react';
import theme from './theme/mainTheme'
import './index.css'
import HervanaSuspense from './components/HervanaSuspense/HervanaSuspense.jsx';

const LandingPage = lazy(() => import("./views/landing/LandingPage"));
const Services    = lazy(() => import("./views/servicios/Services"));
const OurFocus    = lazy(() => import("./views/enfoque/OurFocus"));
const Team     = lazy(() => import("./views/nosotros/pages/Team"));
const History     = lazy(() => import("./views/nosotros/pages/NuestraHistoria"));
const FAQ         = lazy(() => import("./views/faq/FAQ"));
const ProjectInput    = lazy(() => import("./views/tengoproyecto/ProjectInput"));

const  App = () => {
  return (
     <ThemeProvider theme={theme}>
        <Router history={history}>
            <HervanaSuspense> 
                <Switch>
                    <Route path="/"         exact={true} component={LandingPage} ></Route>
                    <Route path="/proyecto" exact={true} component={ProjectInput}></Route>
                    <Route path="/services" exact={true} component={Services} ></Route>
                    <Route path="/ourfocus" exact={true} component={OurFocus} ></Route>
                    <Route path="/team"  exact={true} component={Team} ></Route>
                    <Route path="/historia"  exact={true} component={History} ></Route>
                    <Route path="/faq"      exact={true} component={FAQ} ></Route>
                </Switch>
            </HervanaSuspense>
        </Router>
     </ThemeProvider>
  );
}

export default App;