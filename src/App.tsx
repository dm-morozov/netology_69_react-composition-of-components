import './App.css'
import Card from './components/Card/Card'
import Message from './components/Message/Message'
import SuccessMessage from './components/Message/SuccessMessage'

function App() {
  return (
    <>
      <Card>
        <h2>Привет, React!</h2>
        <p>Это пример композиции компонентов с использованием children.</p>
      </Card>
      <Message type="info" text="Это информационное сообщение." />
      <SuccessMessage text="Операция успешно завершена!" />
    </>
  )
}

export default App
