import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/Hero';

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: 'PD Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
