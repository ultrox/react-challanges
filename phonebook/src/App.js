import React from 'react'
import logo from './logo.svg'
import {GenericStyles, AppWrapper, MainWrapper} from 'src/styles'
import {Main} from 'src/styles/layout'
import PhoneBook from './PhoneBook'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <AppWrapper>
        <GenericStyles />
        <MainWrapper>
          <Switch>
            <Route exact path="/">
              <PhoneBook />
            </Route>
            <Route path="/:id">
              <RandomDetails />
            </Route>
          </Switch>
        </MainWrapper>
      </AppWrapper>
    </Router>
  )
}

function RandomDetails() {
  let {id} = useParams()

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}
export default App
