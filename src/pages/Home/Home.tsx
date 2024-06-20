import styles from './Home.module.css';
import PostService from '../../services/post';

import '../../global.css';
import { initializeApp } from "firebase/app";
import { SetStateAction, useEffect, useState } from 'react';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Post, PostType } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export function Home() {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {

    PostService.getAllPosts()
      .then((response: { data: SetStateAction<PostType[]>; }) => {
        console.log(response.data)
        setPosts(response.data);
        console.log(posts)
      })
      .catch((error: any) => {
        console.log(error)
        setError(true);
      });

    const firebaseConfiguration = async () => {
    try {
      // Request permission for notifications
      const permission = await Notification.requestPermission();
            
            
      const firebaseConfig = {
        apiKey: "AIzaSyCopOMRZQOoH9R30lpbka1mPXImj1597sU",
        authDomain: "exemplo-37a59.firebaseapp.com",
        projectId: "exemplo-37a59",
        storageBucket: "exemplo-37a59.appspot.com",
        messagingSenderId: "208886733001",
        appId: "1:208886733001:web:f5b6f96a73485859c49518",
        measurementId: "G-NDSHVKE3QT"
      };

      const firebaseApp = initializeApp(firebaseConfig);
      const messaging = getMessaging(firebaseApp);

      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Get the FCM token
        const token = await getToken(messaging);
        console.log('FCM Token:', token);
      } else {
        console.log('Notification permission denied.');
      }

      getToken(messaging, { vapidKey: 'BJZEDrQbVEcXpf0O8ZwHTQb78xM1OcSUejXaBnLobmfvF8eU_6eZ-oGm1mZrmOvI8xxjlw0YpPz8uBAWqMkz3_M' }).then((currentToken) => {
        if (currentToken) {
          console.log(currentToken)

        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
      // Handle foreground notifications
      
      onMessage(messaging, (payload) => {
        toast.info(`📬 ${payload.notification?.title}: ${payload.notification?.body}`);
      });
    } catch (error) {
      console.error('Error setting up notifications:', error);
    }
   
    // Register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registration successful with scope: ', registration.scope);
        }).catch((err) => {
          console.log('Service Worker registration failed: ', err);
        });
    }
  }

  firebaseConfiguration()
}, [])


  return (
    <div>
      <Header />
      <ToastContainer />
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
          </main>
      </div>
    </div>
  )
}
