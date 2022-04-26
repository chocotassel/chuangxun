import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import Home from './pages/Home';
// import Follow from './pages/Profile/pages/card1/Follow';
// import Fans from './pages/Profile/pages/card1/Fans';
// import Recommend from './pages/Profile/pages/card1/Recommend';


function App() {
    return (
        <div id='app'>
                {/* 配置路由 */}
            <BrowserRouter>
                <Route path="/" exact render={() => <Redirect to='/home' />} />
                <Route path="/home" component={Home} />
                
                {/* <Route exact path='/follow' component={Follow} />
                <Route exact path='/fans' component={Fans} />
                <Route exact path='/recommend' component={Recommend} /> */}
            </BrowserRouter>

        </div>
        
    )
}

export default App;
