import Header from './Header';
// eslint-disable-next-line react/prop-types
import Footer from '`/component/Footer';
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <footer style={{ margin: '80px 0 0 0' }}>
        <Footer />
      </footer>
    </div>
  );
}

export default DefaultLayout;
