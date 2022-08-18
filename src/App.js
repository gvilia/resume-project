import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import Skills from '../src/pages/Skills';
import Wrapper from './components/Containers/Wrapper';
import Container from './components/Containers/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/UI/Modal';
import Notification from './components/UI/Notification';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const [notificationIsShown, setNotificationIsShown] = useState(false);

  const showNotificationHandler = () => {
    setNotificationIsShown(true);
  };
  const hideNotificationHandler = () => {
    setNotificationIsShown(false);
  };

  const location = useLocation();

  const pageName = location.pathname.substring(1);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      !('theme' in localStorage) ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, []);

  return (
    <Fragment>
      {modalIsShown && <Modal onClose={hideModalHandler} />}
      <Navigation />
      <Wrapper>
        {notificationIsShown && (
          <Notification onClose={hideNotificationHandler} />
        )}
        <Header pageName={pageName} />
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/skills" />}></Route>
            <Route
              path="/skills"
              element={<Skills pageName={pageName} />}
            ></Route>
            <Route
              path="/education"
              element={<Education pageName={pageName} />}
            ></Route>
            <Route
              path="/experience"
              element={<Experience pageName={pageName} />}
            ></Route>
            <Route
              path="/contact"
              element={<Contact pageName={pageName} />}
            ></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </Container>
        <Footer
          onShow={showModalHandler}
          onNotification={showNotificationHandler}
          onClose={hideNotificationHandler}
        />
      </Wrapper>
    </Fragment>
  );
}

export default App;
