import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Header = () => {
  const { i18n, t } = useTranslation(['common']);

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en');
    }
  }, []);

  //   const handleLanguageChange = (e) => {
  //     i18n.changeLanguage(e.target.value);
  //   };

  const lansButton = {
    en: { nativeName: 'English' },
    bn: { nativeName: 'বাংলা' },
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        {t('title')}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div>
          {Object.keys(lansButton).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lansButton[lng].nativeName}
            </button>
          ))}
        </div>
        <ul className="navbar-nav me-auto">
          {/* <li className="nav-item">
            <select
              className="nav-link bg-dark border-0 ml-1 mr-2"
              value={localStorage.getItem('i18nextLng')}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
            </select>
          </li> */}

          <li className="nav-item ml-2">
            <Link className="nav-link" to="/profile">
              {t('profile')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
