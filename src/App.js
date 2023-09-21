import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App(props) {
  return (
    <div className="App">
         <Card products={props.products} />
    </div>
  );
}

export default App;
