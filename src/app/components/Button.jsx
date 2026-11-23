export default function Button({ href, children, variant = "light" }) {
  return (
    <a className={`fc-btn fc-btn--${variant}`} href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span className="fc-btn__arrow" aria-hidden="true">→</span>
    </a>
  );
}
