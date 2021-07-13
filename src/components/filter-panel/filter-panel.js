import React from 'react';
import todoList from '../store/todo-list';
import './filter-panel.scss'

const FilterPanel = () => {
    const { changeFiltering, onToggleStatus } = todoList;
    return (
        <div className='filter_container'>
            <div className='btn_container'>
                <button className='btn_filter_all btn_filter' onClick={() => onToggleStatus('all')} type='submit'>все задачи</button>
                <button className='btn_filter_done btn_filter' onClick={() => onToggleStatus('done')} type='submit'>cделанные</button>
                <button className='btn_filter_important btn_filter' onClick={() => onToggleStatus('important')} type='submit'>только важные</button>
            </div>

            <div className='input_container'>
                <input
                    className='filter'
                    type='search'
                    placeholder=' Что найти?'
                    onChange={(e) => changeFiltering(e.target.value)} />

            </div>
        </div>
    )

}

export default FilterPanel;