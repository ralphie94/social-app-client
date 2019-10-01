import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import Navbar from "./components/Navbar";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33ab9f",
      main: "#009688",
      dark: "#00695f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#4aedc4",
      main: "#1de9b6",
      dark: "#14a37f",
      contrastText: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  }
})

let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login"
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
      <Provider store={store}>
          <Router>
          <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home}/>
                <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
                <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
              </Switch>
            </div>
          </Router>
      </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
