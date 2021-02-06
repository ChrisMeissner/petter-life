import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddPetForm from "./pages/AddPetForm";
import SavedPets from "./pages/SavedPets";
import About from "./pages/About";
import Donate from "./pages/Donate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Store } from "./utils/GlobalState";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {

  return (
    <Store>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/addPetForm" component={AddPetForm} />
              <Route exact path="/savedPets" component={SavedPets} />
              <Route exact path="/about" component={About} />
              <Route exact path="/donate" component={Donate} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </Store>
  );
}

export default App;
