import Card from './components/card';
import data from './data';


function App() {
  const items = data;

  return (
    <div className="App">
      {items.map(item => <Card item={item} />)}
    </div>
  );
}

export default App;