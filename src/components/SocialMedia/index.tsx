import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './social-media.css?inline'

type Props = {
  href: string;
  label: string;
}

export default component$(({ href, label }: Props) => {
  useStylesScoped$(styles);
  return <a href={href}>{label}</a>;
})
