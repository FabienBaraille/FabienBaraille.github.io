import { useState, useEffect } from 'react';
import About from '../About/About';
import Page from '../Page/Page';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InProgress from '../InProgress/InProgress';

import './App.scss';
import Navbar from '../Navbar/Navbar';
import Formation from '../Formation/Formation';
import Container from '../Container/Container';
import Gallery from '../Gallery/Gallery';

function App() {
  const [page, setPage] = useState('home');
  const [isLittle, setIsLittle] = useState(false);

  window.onresize = function () {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    const size = window.innerWidth;
    setIsLittle(size <= 700);
  }, []);

  return (
    <div className="App">
      {!isLittle && (
        <Navbar setPage={setPage} page={page} isLittle={isLittle} />
      )}
      {/* Pseudo route car la compatibilité des routeurs avec GitHub n'est pas l'idéal  */}
      {/* Un refresh sur une page secondaire amène une erreur 404 */}
      <Container>
        <Header />
        <Page>
          {page === 'home' && <About />}
          {page === 'loading' && <InProgress />}
          {page === 'formation' && <Formation />}
          {page === 'projects' && <Gallery />}
        </Page>
        {isLittle && (
          <Navbar setPage={setPage} page={page} isLittle={isLittle} />
        )}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
