import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,createRoutesFromElements,Route,
RouterProvider} from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import ReasultLoginPage from './Screens/ResultLoginPage';
import ResultPage from './Screens/ResultPage';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={HomeScreen} path='/' element ={<HomeScreen/>}/>
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/result/loginpage' element={<ReasultLoginPage/>}/>
       <Route path='/resultpage' element={<ResultPage/>}/>
    </Route>
  )
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
