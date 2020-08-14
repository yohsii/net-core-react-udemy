import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = (props) => {

    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={(props) => <StreamEdit id={props.match.params.id}/> } />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;