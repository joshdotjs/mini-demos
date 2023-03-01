import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Libs:
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { Drawer, Button, Group } from '@mantine/core';

// Comps:
import Provider from 'comps/mantine/provider';
import Hero from './comps/hero/hero';
// import SubHero from './comps/sub-hero/sub-hero';

// Hooks:
import { useScreen } from 'hooks/use-screen';

// Utils:
// import { css } from 'utils/css';

// Img:
import logo from 'img/logo.png';

// Data:
import { links } from 'data/links';

// ==============================================

import './index.scss';

// ==============================================

function App() {
  // --------------------------------------------

  const [opened, setOpened] = useState(false);

  const _nav = useRef(null);
  const _heros = useRef([]);
  const _buttons = useRef([]);
  const _icons = useRef([]);
  const _links = useRef([]);

  const { mobile } = useScreen();

  // --------------------------------------------

  useEffect(() => {
    // - - - - - - - - - - - - - - - - - - - - -

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

    // - - - - - - - - - - - - - - - - - - - - -

    const delay = 75;
    setTimeout(() => {
      const tl = gsap.timeline();
      const fromTo = (ref, duration, delay) => {
        tl.fromTo(ref, { opacity: 0 }, { opacity: 1, duration }, `<+=${delay}`);
      };

      fromTo(_heros.current[0], 1, 0.2);
      fromTo(_heros.current[1], 1, 0.15);
      fromTo(_heros.current[2], 2, 0.2);
      fromTo(_heros.current[3], 2, 0.1);
      fromTo(_heros.current[4], 1, 0.2);
      fromTo(_heros.current[5], 1.75, 0.2);
    }, delay);

    // - - - - - - - - - - - - - - - - - - - - -

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
      smooth: 0.75,
      smoothTouch: false, // mobile
      effects: true,
    });

    let speed;
    if (mobile) {
      speed = 1;
    } else {
      speed = 0.4;
    }
    smoother.effects('.img', { speed });
    smoother.effects('.foreground', { speed: '1' });

    // - - - - - - - - - - - - - - - - - - - - -

    const { current: nav } = _nav;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: nav,
        start: `bottom 90px`,
        end: `bottom top`,
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      nav,
      {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        height: '90px',
      },
      {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: '90px',
      }
    );

    tl.fromTo(
      [..._icons.current],
      {
        fill: 'white',
      },
      {
        fill: 'black',
      },
      '<='
    );

    tl.fromTo(
      [..._links.current],
      {
        color: 'white',
      },
      {
        color: 'black',
      },
      '<='
    );

    tl.fromTo(
      [..._buttons.current],
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      '<='
    );

    // - - - - - - - - - - - - - - - - - - - - -

    return () => {
      smoother?.kill();
    };

    // - - - - - - - - - - - - - - - - - - - - -
  }, []);

  // --------------------------------------------

  return (
    <>
      <nav className='navbar' ref={_nav}>
        {/* <img className='logo' src={logo} alt='' /> */}
        <h2 className='logo' ref={(el) => (_links.current[5] = el)}>
          Camera Company
        </h2>

        {!mobile && (
          <ul className='nav-links'>
            {links.map(({ href, title }, idx) => (
              <li key={title} ref={(el) => (_links.current[idx] = el)}>
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        )}

        {mobile && (
          <svg
            className='hamburger'
            viewBox='0 0 16 16'
            style={{ height: '100%' }}
            ref={(el) => (_icons.current[0] = el)}
            onClick={() => setOpened(true)}
          >
            <path
              fillRule='evenodd'
              d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
            />
          </svg>
        )}

        <div className='container'>
          <Button
            className='button'
            ref={(el) => (_buttons.current[0] = el)}
            variant='default'
          >
            (943) 349-2239
          </Button>

          <Button
            className='button social'
            ref={(el) => (_buttons.current[1] = el)}
            variant='default'
          >
            <svg
              width='100%'
              height='100%'
              fill='currentColor'
              className='instagram'
              viewBox='0 0 16 16'
            >
              <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
            </svg>
          </Button>

          <Button
            className='button social'
            ref={(el) => (_buttons.current[2] = el)}
            variant='default'
          >
            <svg
              width='100%'
              height='100%'
              fill='currentColor'
              className='facebook'
              viewBox='0 0 16 16'
            >
              <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
            </svg>
          </Button>
        </div>
      </nav>

      <main id='smooth-content'>
        <div className='grid'>
          <Hero ref={_heros} />

          <section
            className='non-parallax-container section-1'
            style={{ display: 'flex', height: '100vh' }}
          >
            {/* <SubHero /> */}
          </section>
          {/* <section className='non-parallax-container section-2'>JOSH</section> */}
        </div>

        <footer
          style={{
            width: '100%',
            height: '100px',
            background: 'rgb(17, 73, 104)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.2rem',
          }}
        >
          &copy; 2022 Camera Company
        </footer>
      </main>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding='xl'
        size='lg'
        // styles={{ drawer: { display: 'flex', alignItems: 'center' } }}
      >
        <ul className='nav-links drawer-ul'>
          {links.map(({ href, title }, idx) => (
            <li key={title} ref={(el) => (_links.current[idx] = el)}>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
}

// ==============================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

// ==============================================
