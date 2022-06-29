import './App.css';
import BillTable from './components/BillTable';
import Header from './components/Header';
import TableNav from './components/TableNav';

function App() {
  return (
    <div>
      <Header />
      <div>
        <TableNav />
        <BillTable />
      </div>
    </div>
  );
}

export default App;
