import { useState } from 'react';
import './App.css';
import Inputarea from './components/Inputarea';
import Todolist from './components/Todolist';
import Donelist from './components/Donelist';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [taskname, settaskname] = useState('');
  const [todotasklist, settodotasklist] = useState('');
  const [donetasklist, setdonetasklist] = useState('');

  const onChangeInputArea = (event) => settaskname(event.target.value);

  const onChangeAddtaskButton = () => {
    const newtodotasklist = [...todotasklist, taskname];
    settodotasklist(newtodotasklist);
    settaskname('');
  }

  const onChangeCompleteTaskButton = (index) => {
    const newtodotasklist = [...todotasklist];
    newtodotasklist.splice(index, 1);
    const newdonetasklist = [...donetasklist, todotasklist[index]];
    setdonetasklist(newdonetasklist);
    settodotasklist(newtodotasklist);
  }

  const onChangeCancelTaskButton = (index) => {
    const newdonetasklist = [...donetasklist];
    newdonetasklist.splice(index, 1);
    const newtodotasklist = [...todotasklist, donetasklist[index]];
    settodotasklist(newtodotasklist);
    setdonetasklist(newdonetasklist);
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <p>タスク追加2</p>
            <Inputarea taskname={taskname} onChangeInputArea={onChangeInputArea} onChangeAddtaskButton={onChangeAddtaskButton} />
          </Col>
          <Col>
            <p>ToDOリスト</p>
            <Todolist todotasklist={todotasklist} onChangeCompleteTaskButton={onChangeCompleteTaskButton} />
          </Col>
          <Col>
            <p>Doneリスト</p>
            <Donelist donetasklist={donetasklist} onChangeCancelTaskButton={onChangeCancelTaskButton} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
