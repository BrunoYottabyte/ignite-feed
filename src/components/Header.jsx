import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
        <strong>Ignite Feed</strong>
        <img src={igniteLogo} alt="Logotipo do Ignite"/>
    </div>
  )
}
