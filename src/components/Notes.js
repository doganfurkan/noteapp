import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { destroy} from '../redux/Notes/notesSlice';
import { Empty, Button } from 'antd';



export default function Notes() {
    const items = useSelector(state => state.notes.items);
    const myfilter = useSelector(state => state.notes.filter);
    const filtered = items.filter(item => item.content.indexOf(myfilter)>= 0);
    const dispatch = useDispatch();
  return (
    <div id="notes">
        {
            filtered.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={false}  /> : filtered.map((item,key) => {
            return <div className={`note ${item.color}`} key={key}>{item.content}<Button type='primary' size='small' danger onClick={() => {dispatch(destroy(item.id))}}>X</Button></div>
        })
        }
    </div>
  )
}
