import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import { InlineComponent } from "./inline/component"
import { StyleObjectComponent } from "./styleObject/component"
import { StyledComponent } from "./styledComponent/component"
import { CssModuleComponent } from "./cssModule/component"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div className="logo-section">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Different ways of react styling
          </p>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" activeClassName="active" to='/inline'>Inline</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to='/styleObject'>Style Object</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to='/styledComponent'>Styled Component</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to='/cssModule'>CSS Module</NavLink>
            </li>
          </ul>
        </header>
        <section className="main-content">
          <Redirect exact from="/" to="inline" />
          <Route path="/inline" component={InlineComponent} />
          <Route path="/styleObject" component={StyleObjectComponent} />
          <Route path="/styledComponent" component={StyledComponent} />
          <Route path="/cssModule" component={CssModuleComponent} />
        </section>
      </BrowserRouter>
    </div >
  );
}

export default App;
