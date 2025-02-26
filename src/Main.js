// Main.js
import React, {useReducer} from "react";
import AboutPage from './AboutPage';
import Booking from './Booking';
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from "./Home";
import ConfirmedBooking from "./ConfirmedBooking";
import DelieveriesPage from './DelieveriesPage';

const Main = () => {
  const seedRandom = function(seed){
    var x = 17, y = 2121, z = seed % x;
    return function(){
      return(z = z * y % x) / x;
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for(let i = 17; i <=23; i++){
      if(random() < 0.5){
        result.push(i + ':00');
      } else {
        result.push(i + ':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true;
  }

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state,date){
    return {availableTimes: fetchAPI(new Date())};
  }

  const navigate = useNavigate();
  function submitForm (formData){
    if(submitAPI(formData))
      navigate('/confirmed');
  }


  return (
    <main className="container my-5">
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch}
           submitForm={submitForm}/>} />
          <Route path="/orders" element={<OrderOnlinePage />} />
          <Route path="/delieveries" element={<DelieveriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
    </main>
  );
};

export default Main;
