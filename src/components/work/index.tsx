import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./work.css";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <section class="container">
      <div class="background">
        <div class="hero-transition" />
        <div class="light-blue-bg" />
        <div class="transition" />
        <div class="purple-bg" />
        <div class="purple-transition" />
      </div>
    </section>
  );
});
