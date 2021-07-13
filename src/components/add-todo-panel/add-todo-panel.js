import { observer } from 'mobx-react';
import React from 'react';
import todoList from '../store/todo-list';
import './add-todo-panel.scss'
const AddToDoPanel = observer(props => {
    const { todo: { label }, changeLabel, addTask } = todoList;
    return (
        <div className='task_panel'>
            <form className='task_add_form' onSubmit={addTask}>
                <input className='textarea_task'
                    type='text'
                    placeholder=' Введите задачу которую хотите добавить'
                    onChange={e => changeLabel(e.target.value)}
                    value={label}
                />
                <button 
                type="submit" 
                onClick={(e) => addTask(e)}
                className='add_btn'>
                ✓
                </button>
            </form>
            
        </div>

    )
}
)
export default AddToDoPanel;