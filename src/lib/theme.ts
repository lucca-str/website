export type Theme = 'light' | 'dark'

/** Same key as the Framer site, so returning visitors keep their choice. */
export const THEME_STORAGE_KEY = 'theme'

/**
 * Runs in <head> before first paint: the stored choice, else the OS preference.
 * (The original always booted in dark mode; we follow the OS instead.)
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`

export function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme, persist: boolean) {
  document.documentElement.setAttribute('data-theme', theme)
  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {}
  }
}
