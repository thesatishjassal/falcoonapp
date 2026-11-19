"use client";

import { useEffect, useRef, useState } from "react";

/*
  One logo in the homepage "Works with" carousel.
  Loads the brand icon from Simple Icons (https://simpleicons.org), or from
  your own file if `src` is given (e.g. "/logos/stripe.svg" in public/).
  If the image can't load, the icon is dropped and only the name shows.
*/
export default function HvToolLogo({ name, slug, src }) {
  const [failed, setFailed] = useState(false);
  const img = useRef(null);
  const url = src || (slug ? `https://cdn.simpleicons.org/${slug}` : null);

  // An error can happen before React hydrates, so check once on mount too.
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <span className="hv-brand">
      {url && !failed && (
        <img
          ref={img}
          src={url}
          alt=""
          width={24}
          height={24}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      <span className="hv-brand-name">{name}</span>
    </span>
  );
}
