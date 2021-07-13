import React from 'react';
import Item from '../item/item'
import { observer } from 'mobx-react';
import todoList from '../store/todo-list';


const ItemList = observer(() => {
    const sortedData = todoList.sortData()
    return(
        <ul>
            {
                sortedData.map(item => {
                    return <Item data = {item} key={item.id}/>
                })
            }
        </ul>
    )
}
)
export default ItemList;


