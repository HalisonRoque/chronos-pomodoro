import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme;
    })
    console.log('clicado');
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      console.log('Olha, esse componete será atualizado');
    }
  }, [theme])

  return <nav className={styles.menu}>
    <a className={styles.menuLink}
      href='#'
      aria-label='Ir para a Home'
      title='Ir para a Home'
    >
      <HouseIcon />
    </a>
    <a className={styles.menuLink}
      href='#'
      aria-label='Ver Histórico'
      title='IVer Histórico'
    >
      <HistoryIcon />
    </a>
    <a className={styles.menuLink}
      href='#'
      aria-label='Configurações'
      title='Configurações'
    >
      <SettingsIcon />
    </a>
    <a className={styles.menuLink}
      href='#'
      aria-label='Mudar Tema'
      title='Mudar Tema'
      onClick={handleThemeChange}
    >
      <SunIcon />
    </a>
  </nav>
}