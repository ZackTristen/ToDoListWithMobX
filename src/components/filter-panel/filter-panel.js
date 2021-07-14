import React, { useState } from 'react';
import todoList from '../store/todo-list';
import './filter-panel.scss'

const FilterPanel = () => {
    const { changeFiltering, onToggleStatus } = todoList;
    const [tabs, setTabs] = useState({
        all: true,
        done: false,
        important: false
    })
    const toggle = (tabName) => {
        const clearTabs = {
            all: false,
            done: false,
            important: false
        }
        clearTabs[tabName] = true;
        setTabs(clearTabs);
        onToggleStatus(tabName)
    }

    const getClassName = (tabName) => {
        return `btn_filter btn_filter_${tabName} ${tabs[tabName] ? ' active' : ''}`
    }

    return (
        <div className='filter_container'>
            <div className='btn_container'>
                <button className={getClassName('all')} onClick={() => toggle('all')} type='submit'>Все задачи</button>
                <button className={getClassName('done')} onClick={() => toggle('done')} type='submit'>Сделанные</button>
                <button className={getClassName('important')} onClick={() => toggle('important')} type='submit'>Только важные</button>
            </div>

            <label htmlFor="search-task" className='input_container'>
                <input
                    className='filter'
                    type='search'
                    id="search-task"
                    placeholder=' Что найти?'
                    onChange={(e) => changeFiltering(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </label>
        </div>
    )

}

export default FilterPanel;