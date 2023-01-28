import {useState,useEffect} from 'react'
import { Input } from 'antd';
import { useDispatch } from "react-redux";
import { filtre } from '../redux/Notes/notesSlice';


export default function Header() {
    const dispatch = useDispatch();
    const [fltr,setFltr] = useState("");
    useEffect(() => {
        dispatch(filtre(fltr))
    },[fltr,dispatch])
  return (
    <header id='header'>
        <Input placeholder='Search' value={fltr} onChange={(e) => {setFltr(e.target.value)}}/>
    </header>
  )
}
