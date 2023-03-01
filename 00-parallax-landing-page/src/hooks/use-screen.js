import { useState, useEffect } from 'react';

import { css } from '../utils/css';

// ==============================================

const useScreen = () => {
  // --------------------------------------------

  const isMobile = () => {
    // NOTE: This apparently causes a bug sometimes on page load
    // const reg = /(\d+)/;
    // const _break = Number(css.get('desktop')?.match(reg)?.[0]) || 1e3;
    const _break = 1e3; // css/_breakpoints.scss

    // console.log('w: ', w, '\n_break: ', _break, '\nw > _break: ', w > _break);

    return w < _break;
  };

  // --------------------------------------------

  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight);
  const [mobile, setMobile] = useState(isMobile());

  // --------------------------------------------

  useEffect(() => {
    function reportWindowSize() {
      setH(window.innerHeight);
      setW(window.innerWidth);
    }

    window.onresize = reportWindowSize;
  }, []);

  // --------------------------------------------

  useEffect(() => {
    setMobile(isMobile());
  }, [w]);

  // --------------------------------------------

  return { w, h, mobile };

  // --------------------------------------------
};

// ==============================================

export { useScreen };
