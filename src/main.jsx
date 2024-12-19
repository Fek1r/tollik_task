import React, { useState } from "react";
import "./main.css";
import { useTranslation } from 'react-i18next';  // Импортируем хук для перевода
import './i18n';  // Импортируем конфигурацию i18n

function App() {
  const { t, i18n } = useTranslation();  // Используем хук для перевода
  const [language, setLanguage] = useState('en');  // Состояние для выбранного языка

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);  // Меняем язык
    setLanguage(lng);  // Обновляем состояние
  };

  return (
    <div className="container">
      <h1 className="register-title">{t('register')}</h1>

      <section className="input-box">
        <input
          type="text"
          name="username"
          placeholder={t('username')}
        />
        <i className="bx bxs-user"></i>
      </section>

      <section className="input-box">
        <input
          type="email"
          name="email"
          placeholder={t('email')}
        />
        <i className="bx bxs-envelope"></i>
      </section>

      <section className="input-box">
        <input
          type="password"
          name="password"
          placeholder={t('password')}
        />
        <i className="bx bxs-lock-alt"></i>
      </section>

      <section className="input-box">
        <input
          type="password"
          name="confirm-password"
          placeholder={t('confirmPassword')}
        />
        <i className="bx bxs-lock-alt"></i>
      </section>

      <button className="register-button" type="submit">
        {t('register')}
      </button>

      <h5 className="already-have-an-account">
        {t('alreadyHaveAccount')}{" "}
        <a href="#">
          <b>{t('login')}</b>
        </a>
      </h5>

      {/* Кнопка для смены языка */}
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button>
        <button onClick={() => changeLanguage('ru')} className={language === 'ru' ? 'active' : ''}>RU</button>
      </div>
    </div>
  );
}

export default App;
