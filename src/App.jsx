import { Fragment } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRouter } from './routes';
import DefaultLayout from './component/Layout/DefaultLayout';

function ContainerApp({ children }) {
  return children;
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouter.map((item, index) => {
            const Page = item.component;
            const Layout = item.layout === null ? Fragment : DefaultLayout;
            return (
              <Route
                key={index}
                path={item.patch}
                element={
                  <ContainerApp>
                    <Layout>
                      <Page />
                    </Layout>
                  </ContainerApp>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
