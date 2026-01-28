import Header from './Header';
import Footer from './Footer';
import CartConfirmation from '../features/CartConfirmation';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <CartConfirmation />
      <Footer />
    </div>
  );
}
