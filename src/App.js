import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <Route path="/money">
            <Header />
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <Balance />
                  <IncomeExpenses />
                  <AddTransaction />
                </div>
                <div className="col-lg-6">
                  <TransactionList />
                </div>
              </div>
            </div>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/login'>
             <Login/>
          </Route>
        </GlobalProvider>
      </Switch>
    </Router>
  );
}

export default App;
