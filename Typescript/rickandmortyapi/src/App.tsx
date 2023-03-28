import './App.css'
import { Provider } from 'react-redux/es/exports'
import store from './redux/store'
import { BrowserRouter, Navigate, Route} from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './models';
import React, { lazy, Suspense } from 'react';
import { AuthGuard } from './guards';
import { RoutesWithNotFound } from './utilities';
import { Logout } from './components/Logout/Logout';

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))


const App = () => {
 return (
   <React.StrictMode>
        <div className='App'>
        <Suspense fallback={ <>Cargando...</> } >
        <Provider store={store}>
        <BrowserRouter>
        <Logout/>
        <RoutesWithNotFound>
            <Route path='/' element={ <Navigate to={ PrivateRoutes.PRIVATE } /> } />
            {/* Rutas publicas */}
            <Route path={ PublicRoutes.LOGIN } element={ <Login/> } />

             {/* Rutas privadas */}
            <Route element={ <AuthGuard /> } >
                <Route path={ `${PrivateRoutes.PRIVATE}/*` } element={ <Private /> } />
            </Route>
        </RoutesWithNotFound>
        </BrowserRouter>
        </Provider>
        </Suspense>
        </div>
    </React.StrictMode>

 );
};

export default App
