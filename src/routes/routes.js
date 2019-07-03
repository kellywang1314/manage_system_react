import React from 'react'
import { Router,Route,browserHistory,hashHistory,IndexRoute} from 'react-router'
import Layout from '../layout/Layout'

import Home from '../components/home/Home'
import TableList from '../components/basetab/Table'
import Form from '../components/basetab/Form'
import File from '../components/upload/File'
import Image from '../components/upload/Image'
import Author from '../components/about/Author'
import Project from '../components/about/Project'
import Scroll from '../components/infinitescroll/Scroll'
const RouteConfig = (
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="/home/home" component={Home}/>
            <Route path="/basetab/table" component={TableList}/>
            <Route path="/basetab/form" component={Form}/>
            <Route path="/upload/file" component={File}/>
            <Route path="/upload/image" component={Image}/>
            <Route path="/about/author" component={Author}/>
            <Route path="/about/project" component={Project}/>
            <Route path="/infinitescroll/scroll" component={Scroll}/>
        </Route>
    </Router>
)
export default RouteConfig
