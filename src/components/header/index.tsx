import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header>
      <a href="#work">work</a>
      <a href="#about">about</a>
      <a href="#contact">contact</a>
    </header>
  );
});
