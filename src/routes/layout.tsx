import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import Header from '~/components/header';
import Footer from '~/components/footer';
import styles from './layout.css?inline';
import '@fontsource/fjalla-one';
import '@fontsource/geo';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
