import logo from './logo.svg';
import './App.css';
import CustomerAdd from './CustomerAdd';
import { Provider } from 'react-redux';
import { store } from './store';
import CustomerView from './CustomerView';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CustomerAdd />
        <CustomerView />
      </Provider>
    </div>
  );
}

export default App;
