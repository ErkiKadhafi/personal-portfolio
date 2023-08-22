"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { RiLightbulbLine, RiLightbulbFlashFill } from "react-icons/ri";

export default function ButtonThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
      size={"icon"}
      aria-label={`Change to ${mounted && theme} theme.`}
    >
      {mounted && (
        <>
          {theme === "dark" ? (
            <RiLightbulbFlashFill size={18} />
          ) : (
            <RiLightbulbLine size={18} />
          )}
        </>
      )}
    </Button>
  );
}
