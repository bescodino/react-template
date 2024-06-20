import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://www.utm.ac.mu/utm/wp-content/uploads/2022/02/BSC-SoftwareEngineering-scaled.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/joaotercini.png" />

        <strong>João Tercini</strong>
        <span>Engenheiro</span>
      </div>

      <footer>
        <Link to="profile"> Editar seu perfil</Link>  
        {/* <a href="profile">
          <PencilLine size={20} />
          Editar seu perfil
        </a> */}
      </footer>
    </aside>
  );
}
