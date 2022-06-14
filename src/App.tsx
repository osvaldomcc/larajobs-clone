import { Header } from './components/UI/Header';
import { PostJobAlert } from './components/UI/PostJobAlert';
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="container"></main>
      <PostJobAlert />
    </div>
  );
};
