import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ]
    const location = useLocation();
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState(initTodoList);

    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoList = (todo, index) => {
        //clone current array to a new one
        const newTodoList = [...todoList];
        const originalIndex = newTodoList.findIndex(item => item.id === todo.id);
        // const newTodo = newTodoList.find(newTodo => newTodo.id === todo.id);
        if (originalIndex !== -1) {
            // const idx = newTodoList.indexOf(newTodo);
            //toggle state
            newTodoList[originalIndex] = {
                ...newTodoList[originalIndex],
                status: newTodoList[originalIndex].status === 'new' ? 'completed' : 'new',
            }
            //update todoList
            setTodoList(newTodoList);
        }
    }

    const handleShowAllClick = () => {
        // setFilteredStatus('all');
        const queryParams = { status: 'all' };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowCompletedClick = () => {
        // setFilteredStatus('completed');
        const queryParams = { status: 'completed' };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowNewClick = () => {
        // setFilteredStatus('new');
        const queryParams = { status: 'new' };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams),
        });
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus]);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;