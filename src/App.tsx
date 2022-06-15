import { Header } from "./components/UI/Header";
import { PostJobAlert } from "./components/UI/PostJobAlert";
import { Footer } from "./components/UI/Footer";
import { Login } from "./pages/Login";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Login />
      </main>
      <PostJobAlert show={true} />
      <Footer />
    </div>
  );
};
