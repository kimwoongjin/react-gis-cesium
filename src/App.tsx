import './App.css';
import Layout from './components/Layout';
import NaverMapComponent from './components/NaverMap';
import { CctvProvider } from './provider/CctvProvider';

function App() {
  return (
    <CctvProvider>
      <Layout />
      <NaverMapComponent />
    </CctvProvider>
  );
}

export default App;
