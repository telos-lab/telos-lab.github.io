/*
  manages light/dark mode.
*/

{
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  // immediately load saved (or default) mode before page renders
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") ?? systemSettingDark.matches.toString();

  const onLoad = () => {
    // update toggle button to match loaded mode
    document.querySelector(".dark-toggle").checked = systemSettingDark.matches.toString();
      //document.documentElement.dataset.dark === "true";
  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem("dark-mode", value);
  };
}
