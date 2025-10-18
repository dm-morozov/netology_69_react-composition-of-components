import './App.css'
import Card from './components/Card/Card'
import CardCw from './components/CardCw/CardCw'
import List from './components/List/List'
import ListItem from './components/List/ListItem'
import Message from './components/Message/Message'
import SuccessMessage from './components/Message/SuccessMessage'
import Widget from './components/Widget/Widget'

function App() {
  return (
    <>
      <CardCw>
        <h2>Привет, React!</h2>
        <p>Это пример композиции компонентов с использованием children.</p>
      </CardCw>
      <Message type="info" text="Это информационное сообщение." />
      <SuccessMessage text="Операция успешно завершена!" />
      <List>
        <ListItem>Купить молоко</ListItem>
        <ListItem>Сделать домашнее задание по React</ListItem>
        <ListItem>Повторить композицию</ListItem>
      </List>
      <Widget title="Теги">
        <div className="tag-block">
          <button className="btn">JavaScript</button>
          <button className="btn">React</button>
        </div>
      </Widget>

      <Widget title="Контакты">
        <List>
          <ListItem>Email</ListItem>
          <ListItem>Телефон</ListItem>
        </List>
      </Widget>
      <h2>Домашнее задание: Карточки</h2>
      <div className="container mt-5">
        <Card
          imageUrl="https://img.freepik.com/free-photo/mountains-lake_1398-1150.jpg?semt=ais_hybrid&w=740&q=80"
          imageAlt="Placeholder image"
          width="18rem"
        >
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </Card>

        <hr className="my-5" />

        <Card width="18rem">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </Card>
      </div>
    </>
  )
}

export default App
