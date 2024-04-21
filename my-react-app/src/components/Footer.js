// File Name: Footer.js

import React from 'react';

export default function Footer() {
  return (
    <p style={{ margin: '25px auto 15px', textAlign: 'center' }}>
      Built with{' '}
      <img
        style={{ width: 25 }}
        src="https://abs.twimg.com/emoji/v2/72x72/269b.png"
        alt="react.js"
      />
      &nbsp; by &nbsp;
      <a
        target="_blank"
        style={{ color: '#6FBEDB', cursor: 'pointer' }}
        title="Create By Jitendra & Qhizar"
        rel="noopener noreferrer"
        href="https://technical-forever.netlify.app/"
      >
        Jitendra & Qhizar
      </a>
    </p>
  );
}
