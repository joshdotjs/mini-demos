import { useRef } from 'react';
import { gsap } from 'gsap';
import { css } from './utils/css';
import { useScreen } from './hooks/use-screen';
import { data } from './data/data.js';
import { eth, clock, avatar } from './utils/imgs';

// ==============================================

export default function App() {
  // --------------------------------------------

  const { mobile } = useScreen();

  const texts = useRef([]);
  const overlay = useRef(null);
  const tl = useRef(null);
  const card = useRef(null);

  const duration = 0.2;

  // --------------------------------------------

  const play = () => {
    tl.current = gsap.timeline();

    tl.current.to(overlay.current, {
      background: css.get('clr-active-translucent'),
      duration,
    });

    tl.current.to(
      [...texts.current],
      {
        color: css.get('clr-active'),
        duration,
        onReverseComplete: () => {
          tl.current.kill();
          enableClick();
        },
      },
      '<='
    );
  };

  // --------------------------------------------

  const reverse = () => tl.current.reverse();

  // --------------------------------------------

  const click = () => {
    if (mobile) {
      disableClick();
      play();
    }
    setTimeout(() => reverse(), duration * 1e3);
  };

  // --------------------------------------------

  const disableClick = () => (card.current.style.pointerEvents = 'none');
  const enableClick = () => (card.current.style.pointerEvents = 'auto');

  // --------------------------------------------

  return (
    <div
      className='card'
      onMouseEnter={play}
      onMouseLeave={reverse}
      onClick={click}
      ref={card}
    >
      <div className='img-container'>
        <div className='img' />
        <div ref={overlay} className='overlay'></div>
      </div>

      <h2 ref={(el) => (texts.current[0] = el)} className='title'>
        {data.title}
      </h2>

      <p className='sub-title'>{data.subtitle}</p>

      <div className='price-container'>
        <p className='price'>
          <img src={eth} alt='' /> {data.price}
        </p>
        <p className='time'>
          <img src={clock} alt='' />
          {data.time}
        </p>
      </div>

      <div className='avatar-container'>
        <img className='avatar' src={avatar} alt='' />
        <p className='text-container'>
          <span className='text'>Creation of </span>
          <span ref={(el) => (texts.current[1] = el)} className='author'>
            {data.author}
          </span>
        </p>
      </div>
    </div>
  );
}

// ==============================================
