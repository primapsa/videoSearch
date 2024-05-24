import React from 'react';
import classNames from 'classnames';

const styles = {
  rotateLeft: {
    transform: 'rotate(-180deg)',
  },
};

type ArrowProps = {
  direction: 'right' | 'left';
};

const Arrow = ({ direction }: ArrowProps) => (
  <svg
    className={classNames({
      'rotate-left': direction === 'left',
    })}
    style={{
      ...(direction === 'left' && styles.rotateLeft),
    }}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.63301 7.99996L5.33301 4.69996L6.27601 3.75696L10.519 7.99996L6.27601 12.243L5.33301 11.3L8.63301 7.99996Z"
      fill="#7B7C88"
    />
  </svg>
);

export default Arrow;
