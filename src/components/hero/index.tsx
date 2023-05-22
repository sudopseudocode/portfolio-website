import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './hero.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <section class="container">
      <h1>Paul<br />DiLoreto</h1>
      <h2>Senior Software Engineer, ex-Twitter</h2>
      <h3>Currently working at DocuSign</h3>

      <button>Contact me</button>

      <div class="contact-buttons">
        <a href="https://github.com/pauldiloreto">GH</a>
        <a href="https://linkedin.com/in/pauldiloreto">LI</a>
      </div>

      <div class="view-more">
        View More
        <div class="vertical-bar" />
      </div>
    </section>
  );
});
