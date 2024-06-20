import { ToastContainer } from 'react-toastify';
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm';
import { Header } from '../../components/Header/Header';
import styles from './Profile.module.css';

export function Profile(props: {user: string}) {
  return (
    <div>
    <Header />
    <ToastContainer />
    <div className={styles.wrapper}>
      <p>
        {props.user}
      </p>
        <main>
            <ProfileEditForm/>
        </main>
    </div>
  </div>
   
  )
}
