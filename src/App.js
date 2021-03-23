import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Content from './components/content';
import ContentDisplay from './components/contentDisplay';

function App() {
  return (
    <div className="App">
        <Navigationbar/>
        
        <Content />
        <hr></hr>
        <ContentDisplay />
    </div>
  );
}

export default App;
