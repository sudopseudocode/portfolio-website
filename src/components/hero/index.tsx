import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './hero.css?inline';
import ArrowForward from '~/components/icons/ArrowForward';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <section class="container">
      <h1 class="title-background">Paul<br />DiLoreto</h1>
      <div class="title-group">
        <h1>Paul DiLoreto</h1>
        <h2>Senior Software Engineer, ex-Twitter</h2>
        <h3>Currently working at DocuSign</h3>
        <a class="contact-button" href="mailto:paul.diloreto@gmail.com">Contact me <ArrowForward /></a>
      </div>

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
