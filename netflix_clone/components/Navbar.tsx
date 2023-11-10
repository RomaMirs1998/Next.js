import Link from "next/link";
import styles from "./Navbar.module.css";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const NavBar = (props: { username: string }): React.JSX.Element => {
  const { username } = props;
  const router: NextRouter = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClickHome = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    router.push("/mylist");
  };

  const handleDropdown = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a
          className={styles.logoLink}
          href="https://romamirsoian.pythonanywhere.com"
        >
          <div className={styles.logoWrapper}>
            <Image
              src="/static/Netflix.svg"
              alt="Netflix Logo"
              width={130}
              height={60}
            ></Image>
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <button onClick={handleOnClickHome}>Home</button>
          </li>
          <li className={styles.navItem2}>
            <button onClick={handleOnClickMyList}>My List</button>
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button onClick={handleDropdown} className={styles.usernameBtn}>
              <p className={styles.username}>
                {" "}
                <Image
                  src="/static/expand_more.svg"
                  width={15}
                  height={15}
                  alt="expand more"
                ></Image>
                {username}
              </p>
              {/**  Expand more icons */}
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login" className={styles.linkName}>
                    Sign Out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
