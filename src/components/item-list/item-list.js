import React from 'react';
import Item from '../item/item'
import { observer } from 'mobx-react';
import todoList from '../store/todo-list';
import './item-list.scss';

const ItemList = observer(() => {
    const sortedData = todoList.sortData()
    return (
        <div className='item_list'>
        <ul>
            {
                sortedData.length 
                ? sortedData.map(item => {
                    return <Item data={item} key={item.id} />
                })
                : <span>Список задач пуст</span>
            }
        </ul>
        </div>
    )
}
)
export default ItemList;


