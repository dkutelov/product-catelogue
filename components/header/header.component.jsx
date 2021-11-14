import Link from 'next/link';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navContainer}>
          <li className={styles.logo}>
            <Link href='/'>
              <h1>Каталог Бебешки Стоки</h1>
            </Link>
          </li>
          <li className={styles.newProductLink}>
            <Link href='/new-product'>Добави Продукт</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;