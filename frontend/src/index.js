import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoll from './pages/CreatePoll';
import ViewPoll from './pages/ViewPoll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-full h-screen">
        <div className="h-16 w-full bg-gray-800 flex items-center">
          <div className="container mx-auto px-5">
            <Link
              to="/"
              className="text-white cursor-pointer hover:text-gray-400 transition duration-150 mr-3"
            >
              Home
            </Link>
            <Link
              to="/polls/create"
              className="text-white cursor-pointer hover:text-gray-400 transition duration-150 mr-3"
            >
              Create Poll
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/" component={Home} />
          <Route path="/polls/create" component={CreatePoll} />
          <Route path="/polls/:poll" component={ViewPoll} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
