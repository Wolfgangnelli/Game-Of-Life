import React, {FC} from 'react';
import Routes from '../routes/index'
import { Footer } from '../components/organisms'
import './index.css';

const App: FC = () => {

  return (
    <div className="app relative">
        <Routes />
    </div>
  );
}

export default App;
