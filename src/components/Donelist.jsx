import '../App.css';

function Donelist(props) {
  const { donetasklist, onChangeCancelTaskButton} = props;
  return (
    <div className='done-list'>
        {donetasklist && donetasklist.map((donetask, index) => {
          return (
            <div key={index} className='task-layout'>
              <p>{donetask}</p>
              <button onClick={() => onChangeCancelTaskButton(index)}>戻る</button>
            </div>
          );
        })}
      </div>
  );
}

export default Donelist;