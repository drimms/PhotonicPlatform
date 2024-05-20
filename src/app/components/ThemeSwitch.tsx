import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect, SyntheticEvent } from "react";
import { useTheme } from "next-themes";
import "react-toggle/style.css";
import Toggle from "react-toggle";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const handleThemeToggle = (event: any) => {
        const selectedTheme = event.target.checked ? "dark" : "light";
        setTheme(selectedTheme);
    };

    return (
            <Toggle
                checked={resolvedTheme === "dark"}
                onChange={handleThemeToggle}
                icons={{
                    checked: <FiMoon size={10} color="white" />,
                    unchecked: <FiSun size={10} color="yellow" />,
                }}
                aria-label="Dark mode toggle"
            />
    );
}
