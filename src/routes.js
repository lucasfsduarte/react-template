import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AddExample from './pages/AddExample'
import ListExample from './pages/ListExample'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AddExample} exact/>
        <Route path="/list" component={ListExample} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes