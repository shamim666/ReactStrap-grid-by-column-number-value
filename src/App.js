import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';


function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-09-28&sortBy=popularity&apiKey=20b7c1423eef4ba7a35badcedf17a580')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      {

        news.length === 0 ? <Spinner animation="border" /> :
          <Row xs={1} md={2} className="g-4">
            <Col md={9}>
              <Row xs={1} md={3} className="g-4">
                {news.map(nw => <News news={nw} />)}
              </Row>
            </Col>
            <Col md={3}></Col>
          </Row>

      }


    </div>
  );
}

export default App;
