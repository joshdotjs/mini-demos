import { Button } from '@mantine/core';

import css from './sub-hero.module.scss';

// ==============================================

export default function SubHero() {
  return (
    <section className={css.section}>
      <div className={css.A}>
        <h3>
          <span>WHILE YOU WERE OUT,</span>
          <span>THE BAD GUYS WERE TRYING TO GET IN</span>
        </h3>

        <h2>
          <span>SECURITY CAMERA</span>
          <span>INSTALLATION OKC</span>
        </h2>

        <p>
          When it's closing time or vacation time, is everything you've worked
          for protected to the highest degree?
        </p>

        <p>
          If there's no surveillance system installed, the answer is NO. When
          the world feels uncertain, 24-hour surveillance of your home or
          business is a must. If you're out of sight, your property isn't out of
          mind, but top of mind for the bad guys.
        </p>

        <p>
          At Camera Guys, we think of surveillance systems as more than cameras.
          It's an extension of YOU and how diligently you protect your
          investments. Whether it's expensive equipment, prized vehicles,
          livestock or family safety, our surveillance systems will watch over
          your home or business 24/7/365.
        </p>

        <div className={css['button-container']}>
          <Button variant='filled'>BUSINESS</Button>
          <Button variant='filled'>HOME</Button>
        </div>
      </div>
      <div className={css.B}>B</div>
    </section>
  );
}
