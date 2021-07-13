import React from 'react';
import todoList from '../store/todo-list';

const FilterPanel = () => {
const {changeFiltering} = todoList;
return(
    <div>
        <input 
        type='search' 
        placeholder='Введите задачу' 
        onChange={(e) => changeFiltering(e.target.value)}/>
    </div>
)

}

export default FilterPanel;