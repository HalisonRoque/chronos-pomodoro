import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useLanguage } from '../../shared/localization/LanguageProvider';
import {
  HistoryIcon,
  HouseIcon,
  LanguagesIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import { useIntl } from 'react-intl'

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  // const [theme, setTheme] = useState<AvailableThemes>('dark');
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  })
  const { toggleLocale } = useLanguage();
  const { formatMessage } = useIntl();

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme;
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  return <nav className={styles.menu}>
    <a className={styles.menuLink}
      href='#'
      aria-label={formatMessage({ id: "menu.go.home" })}
      title={formatMessage({ id: "menu.go.home" })}
    >
      <HouseIcon />
    </a>
    <a className={styles.menuLink}
      href='#'
      aria-label={formatMessage({ id: "menu.historico" })}
      title={formatMessage({ id: "menu.historico" })}
    >
      <HistoryIcon />
    </a>
    <a className={styles.menuLink}
      href='#'
      aria-label={formatMessage({ id: "menu.settings" })}
      title={formatMessage({ id: "menu.settings" })}
    >
      <SettingsIcon />
    </a>
    <a className={styles.menuLink}
      href='#'
      aria-label={formatMessage({ id: "menu.change.theme" })}
      title={formatMessage({ id: "menu.change.theme" })}
      onClick={handleThemeChange}
    >
      {nextThemeIcon[theme]}
    </a>
    <a
      className={styles.menuLink}
      href="#"
      aria-label={formatMessage({ id: "menu.change.languages" })}
      title={formatMessage({ id: "menu.change.languages" })}
      onClick={(e) => {
        e.preventDefault();
        toggleLocale();
      }}
    >
      <LanguagesIcon />
    </a>
  </nav>
}