import css from './Header.module.css';
import sprite from '../../images/sprite.svg';
import logo from '../../images/goose-calendar1x.png';
import logo2x from '../../images/goose-calendar2x.png';
import { useLocation } from 'react-router-dom';
import { ToggleTheme } from './ThemeToggler/ToggleTheme';
import { FeedbackBtn } from 'components/Header/FeedbackBtn/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { FeedbackModal } from './FeedbackModal/FeedbackModal';
import { useState } from 'react';
import { ModalSideBar } from 'components/Modal/ModalSideBar';
import { selectTasks } from '../../redux/tasks/selectors';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const showGooseImage = useSelector(selectTasks);

  // Modal for Review
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // Modal for SideBar
  const openSideBar = () => {
    setShowSideBar(true);
  }

  const closeSideBar = () => {
    setShowSideBar(false);
  }

  const location = useLocation();
  const currentPath = location.pathname;

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar')) {
    title = 'Calendar';
  } else if (currentPath.startsWith('/statistics')) {
    title = 'Statistics';
  } else {
    title = '';
  }

  return (
    <>
      <div className={css.wrapper}>
        {showGooseImage ? <div>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${logo} 1x, ${logo2x} 2x`}
            />
            <img src={logo} alt="Logo goose" />
          </picture>

          <h1 className={css.title}>{title}</h1>
          <h2>
            <span>Let go</span> of the past and focus on the present!
          </h2>
        </div> :
        <h1 className={css.title}>{title}</h1>}
        <button type="button" className={css.btn}>
          <svg className={css.menuBurger} onClick={openSideBar}>
            <use href={`${sprite}#icon-burger`} />
          </svg>
        </button>
        <div className={css.infoWrapper}>
          <FeedbackBtn onClick={openModal} />
          <ToggleTheme />
          <UserInfo />
        </div>
      </div>
      {showModal && <FeedbackModal onClose={closeModal} />}


      {showSideBar ? <ModalSideBar setShowSideBar={closeSideBar}/> : ""}
    </>
  );
};
