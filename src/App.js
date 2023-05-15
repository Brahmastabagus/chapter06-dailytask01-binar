import logo from './logo.svg';
import './App.css';

import Item from './components/Item/Item';
import Filter from './pages/Filter/Index'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const dateData = [
    {
      "date": "2017-01-25T11:16:40 -07:00"
    },
    {
      "date": "2019-06-22T03:53:03 -07:00"
    },
    {
      "date": "2014-09-03T10:25:06 -07:00"
    },
    {
      "date": "2020-02-03T12:41:47 -07:00"
    },
    {
      "date": "2020-08-03T12:45:22 -07:00"
    }
  ]

  return (
    <div>
      {/* <h2>Let's get started</h2>
      <Item title="mitsubisi" price="2000000" date={dateData[0].date}></Item>
      <Item title="hyundai" price="10" date={dateData[1].date}></Item>
      <Item title="toyota" price="2" date={dateData[2].date}></Item>
      <Item title="lancer" price="525252" date={dateData[3].date}></Item>
      <Item title="honda" price="100" date={dateData[4].date}></Item> */}
      <Filter />
    </div>
  );
}

export default App;