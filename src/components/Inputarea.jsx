import '../App.css';

function Inputarea(props) {
  const { taskname, onChangeInputArea, onChangeAddtaskButton} = props;
  return (
    <div className='input-area'>
        <input placeholder='タスク名を入力' value={taskname} onChange={onChangeInputArea}/>
        <button onClick={taskname && onChangeAddtaskButton}>追加</button>
    </div>
  );
}

export default Inputarea;