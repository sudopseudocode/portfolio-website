import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>Hello World!</div>
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
