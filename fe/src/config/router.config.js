import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UploadFile from "../pages/uploadFile" 

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/uploadFile/">uploadFile</Link>
          </li>
        </ul>
      </nav>

      <Route path="/uploadFile/" component={UploadFile}></Route>
    </div>
  </Router>
);

export default AppRouter;