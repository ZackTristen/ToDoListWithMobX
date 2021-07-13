import React from 'react';
import FilterPanel from '../filter-panel/filter-panel';
import AddToDoPanel from '../add-todo-panel/add-todo-panel';
import ItemList from '../item-list/item-list';


const App = () => {
    return (
        <div>
            <FilterPanel />
            <ItemList />
            <AddToDoPanel  />
        </div>
    )
}

export default App;