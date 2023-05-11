import Header from "./Header";
import Footer from "./Footer";
import classNames from "classnames/bind";
import styles from '../sass/modules/Layout.module.scss';
import ProductViewModal from "./ProductViewModal";
const cx = classNames.bind(styles);
function Layout({ children }) {
  return (
    <div >
      <Header className={cx('header')}/>  
      <div className={cx("wrapper")}>
        <div className="container">{children}</div>
      </div>
      <Footer className={cx('footer')}/>
      <ProductViewModal/>
    </div>
  );
}

export default Layout;
