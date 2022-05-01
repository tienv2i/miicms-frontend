import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import { Home, About, Todo, PageNotFound } from './pages';
import { Task, TaskList } from './components/Todo';


export default function App(props) {
    return (
    <>
        <Navigation />
        <div className="max-w-6xl mt-4 mx-auto">
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='/todo' element = {<Todo />} >
                    <Route path='/todo/tasks' element = {<TaskList />}/>
                    <Route path='/todo/task/:id' element = {<Task />} />
                </Route>
                <Route path='/about' element = {<About />} />
                <Route path='*' element = { <PageNotFound />}></Route>
            </Routes>
            HGello man this is a page xx....!
        </div>
    </>
    );
  }
