import styles from './Header.module.css';

import labsidLogo from '../../assets/labsid.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={labsidLogo} alt="Logotipo do Labsid" />
    </header>
  );
}
