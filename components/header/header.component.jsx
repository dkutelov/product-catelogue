import Link from 'next/link';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navContainer}>
          <li className={styles.logo}>
            <Link href='/'>
              <h1>Разпродажба Бебешки Стоки</h1>
            </Link>
            <p className={styles.subHeading}>
              За поръчка: 0889621010, contact@digitals.bg. Доставка с куриер:
              4.95лв.
            </p>
          </li>
          {/* <li className={styles.newProductLink}>
            <Link href='/new'>Нов</Link>
          </li>
          <li className={styles.newProductLink}>
            <Link href='/edit'>Редакция</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
