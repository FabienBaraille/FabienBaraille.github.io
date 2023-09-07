import { useState } from 'react';
import About from '../About/About';
import Card from '../Card/Card';
import Page from '../Page/Page';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InProgress from '../InProgress/InProgress';

import './App.scss';
import Navbar from '../Navbar/Navbar';
import Formation from '../Formation/Formation';
import Container from '../Container/Container';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Navbar setPage={setPage} page={page} />
      {/* Pseudo route car la compatibilité des routeurs avec GitHub n'est pas l'idéal  */}
      {/* Un refresh sur une page secondaire amène une erreur 404 */}
      <Container>
        <Header />
        <Page>
          {page === 'home' && (
            <>
              <Card />
              <About />
            </>
          )}
          {page === 'loading' && <InProgress />}
          {page === 'formation' && <Formation />}
        </Page>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
