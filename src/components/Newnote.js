import {useState} from "react";
import { Input, Radio, Button } from "antd";
import { useDispatch } from "react-redux";
import { addNote } from '../redux/Notes/notesSlice';
import { nanoid } from 'nanoid'


const { TextArea } = Input;
const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Purple",
    value: "purple",
  },
];

export default function Newnote() {
    const [clr,setClr] = useState("red");
    const [notum,setNotum] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = nanoid();
        dispatch(addNote({content:notum,color:clr,id:id}));
        setNotum("");
    }

    const onChange = ({ target: { value } }) => {
        setClr(value);
      };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="enter">
          <TextArea
            allowClear
            placeholder="New Note"
            style={{ resize: "none", height: "4em" }}
            value={notum}
            onChange={(e) => {setNotum(e.target.value)}}
            required
          ></TextArea>
        </div>
        <div className="buttons">
          <Radio.Group
            options={options}
            onChange={onChange}
            value={clr}
            optionType="button"
            buttonStyle="solid"
          />
          <Button htmlType="submit" type="primary">Add New Note</Button>
        </div>
      </form>
    </div>
  );
}
