import '../App.css';

function Todolist(props) {
  const { todotasklist, onChangeCompleteTaskButton} = props;
  return (
    <div className='todo-list'>
        {todotasklist && todotasklist.map((todotask, index) => {
          return (
            <div key={index} className='task-layout'>
              <p>{todotask}</p>
              <button onClick={() => onChangeCompleteTaskButton(index)}>完了</button>
            </div>
          );
        })}
      </div>
  );
}

export default Todolist;