import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero";
import Work from "~/components/Work";

export default component$(() => {
  return (
    <>
      <Hero />
      <Work />
    </>
  );
});

export const head: DocumentHead = {
  title: "PD Portfolio",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
