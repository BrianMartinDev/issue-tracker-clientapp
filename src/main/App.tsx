import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CompanyList from '../views/company/CompanyList';
import ProjectList from '../views/project/ProjectList';
import IssuesList from '../views/issues/IssuesList';
import CommentProjectsList from '../views/commentProjects/CommentProjects';
import CommentIssuesList from '../views/commentIssues/CommentIssues';

function App() {
  return (
    <div className="container-fluid">
      <CompanyList></CompanyList>
      <ProjectList></ProjectList>
      <IssuesList></IssuesList>
      <CommentProjectsList></CommentProjectsList>
      <CommentIssuesList></CommentIssuesList>
    </div>
  );
}

export default App;
