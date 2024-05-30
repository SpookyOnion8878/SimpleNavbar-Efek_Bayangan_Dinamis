import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
