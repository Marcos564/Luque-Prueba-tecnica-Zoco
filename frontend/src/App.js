import './App.css';
import BarsTable from'../src/components/BarsTable';
import Footer from './components/Footer';
import ScrapearButton from './components/Boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Bares en Tucumán</h2>
        
        <ScrapearButton/>
        
      </header>

      <main className="content">
        <BarsTable />
      </main>


      <Footer/>


    </div>
  );
}

export default App;
