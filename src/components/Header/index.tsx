import styles from "./styles.module.css";
import { MoonIcon, Search, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type AvaliableThemes = "dark" | "light";

export function Header() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaliableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.inner_header}>
        <div className={styles.header_title}>
          <h2 className={styles.title}>
            <a className={styles.link_title_code}>Code</a>
            <a className={styles.link_title}>Lab</a>
          </h2>
          <a
            className={styles.title}
            aria-label="Mudar Tema"
            onClick={handleThemeChange}
          >
            {nextThemeIcon[theme]}
          </a>
        </div>

        <div className={styles.container_input}>
          <Search className={styles.lupa} aria-label="Pesquisar" />
          <input type="text" placeholder="Pesquisar no blog" />
        </div>
      </div>
    </header>
  );
}
