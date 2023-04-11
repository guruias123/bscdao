import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import history from './history'
import routes from '../routes'
import LogIn from '../User/Auth/LogIn'
import LogInWithNumio from '../User/Auth/LogInWithNumio'
import SignUp from '../User/Auth/SignUp'
import Layout from '../Layout'
import Home from '../Pages/Home'
import Proposals from '../Pages/Proposals'
import Votes from '../Pages/Votes'
import ActiveProjects from '../Pages/ActiveProjects'
import Rewards from '../Pages/Rewards'
import Ramper from '../Ramper/Ramper'

export default () =>

<Router history={history}>
<Routes>
      
      <Route path={routes.auth.logIn()} element={<LogIn />} />
      <Route path={routes.auth.logInWithNumio()} element={<LogInWithNumio />} />
      <Route path={routes.auth.signUp()} element={<SignUp />} />

        <Route path={routes.root()} exact element={<Layout><Home /></Layout>}/>
        <Route path={routes.proposals()} exact element={<Layout><Proposals /></Layout>}/>
        <Route path={routes.votes()} exact element={<Layout><Votes /></Layout>}/>
        <Route path={routes.activeProjects()} exact element={<Layout><ActiveProjects /></Layout>}/>
        <Route path={routes.rewards()} exact element={<Layout><Rewards /></Layout>}/>
     
</Routes>
</Router>