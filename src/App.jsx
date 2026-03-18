import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { HomePage } from "./pages/Home.jsx";
import { NotFoundPage } from "./pages/404.jsx";

import { Route } from "./components/Route.jsx";


function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-background-light">
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />

        <Footer />
      </div>
    </>
  );
}

export default App;