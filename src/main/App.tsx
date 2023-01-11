import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyList from '../views/company/CompanyList';
import CompanyDetails from '../views/company/CompanyDetail';
import ProjectList from '../views/project/ProjectList';
import ProjectDetails from '../views/project/ProjectDetail';
import IssuesList from '../views/issues/IssuesList';
import IssueDetail from '../views/issues/IssueDetail';


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Routes>
          <Route path='/CompanyList' element={<CompanyList />}></Route>
          <Route path='/Company/:id' element={<CompanyDetails />}></Route>
          <Route path='/ProjectList' element={<ProjectList />}></Route>
          <Route path='/Project/:id' element={<ProjectDetails />}></Route>
          <Route path='/IssueList' element={<IssuesList />}></Route>
          <Route path='/Issue/:id' element={<IssueDetail />}></Route>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
