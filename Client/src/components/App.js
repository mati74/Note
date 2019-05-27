import React from 'react';
import {Router , Route , Switch} from 'react-router-dom';
import history from '../history'
import NoteList from './notes/NoteList';
import NoteDelete from './notes/NoteDelete';
import NoteEdit from './notes/NoteEdit';
import NoteCreate from './notes/NoteCreate';
import Header from "./Header";

const App = ()=>{
    return<div className="ui container">

        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                <Route path="/" exact component={NoteList}/>
                <Route path="/notes/new" exact component={NoteCreate}/>
                <Route path="/notes/edit/:id" exact component={NoteEdit}/>
                <Route path="/notes/delete/:id" exact component={NoteDelete}/>
                </Switch>

            </div>
        </Router>
    </div>
}
export default App