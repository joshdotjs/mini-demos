import { forwardRef } from 'react';
import { Button } from '@mantine/core';

import stars from 'img/stars.webp';
import pattern from 'img/pattern-bottom.webp';

import css from './hero.module.scss';

// ==============================================

const Hero = forwardRef((props, ref) => {
  return (
    <section style={{ position: 'relative' }}>
      <div className='parallax-container'>
        <div ref={(el) => (ref.current[0] = el)} className='img'></div>
      </div>

      <div className={`foreground ${css.hero}`}>
        <div className={css.overlay}>
          <p ref={(el) => (ref.current[5] = el)} className={css.quote}>
            Call and Tell Us <strong>"I Know John!"</strong> for FREE
            Installation!
          </p>

          <div className={css.container}>
            <img
              ref={(el) => (ref.current[3] = el)}
              className={css.stars}
              src={stars}
              alt='stars'
            />
            <h2>
              <span ref={(el) => (ref.current[1] = el)}>NEVADA'S</span>
              <span ref={(el) => (ref.current[2] = el)}>SECURITY EXPERTS</span>
            </h2>
            <Button
              className={css.button}
              ref={(el) => (ref.current[4] = el)}
              variant='default'
            >
              (943) 349-2239
            </Button>
          </div>
          <img className={css['img-bottom']} src={pattern} alt='' />
        </div>
      </div>
    </section>
  );
});

// ==============================================

export default Hero;
