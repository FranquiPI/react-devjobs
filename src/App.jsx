import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { HomePage } from "./pages/Home.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import { CompaniesPage } from "./pages/CompaniesPage.jsx";
import { Route } from "./components/Route.jsx";
import { ExpertPage } from "./pages/ExpertPage.jsx";
import { Contact } from "./pages/Contact.jsx";


function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-background-light">
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path='/companies' component={CompaniesPage}/>
        <Route path='/expert' component={ExpertPage} />
        <Route path='/contact' component={Contact} />

        <Footer />
      </div>
    </>
  );
}

export default App;