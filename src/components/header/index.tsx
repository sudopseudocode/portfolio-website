import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const mobileNavOpen = useSignal(false);
  const closeMenu = $(() => {
    mobileNavOpen.value = false;
  });

  return (
    <header>
      <nav class={{ "mobile-open": mobileNavOpen.value }}>
        <a href="#work" onClick$={closeMenu}>
          work
        </a>
        <a href="#about" onClick$={closeMenu}>
          about
        </a>
        <a href="#contact" onClick$={closeMenu}>
          contact
        </a>
      </nav>
      <button
        aria-label={
          mobileNavOpen.value ? "Close navigation menu" : "Open navigation menu"
        }
        class="mobile-nav-button"
        onClick$={() => (mobileNavOpen.value = !mobileNavOpen.value)}
      >
        <div
          class={["hamburger-icon", { "close-icon": mobileNavOpen.value }]}
        />
      </button>
    </header>
  );
});
