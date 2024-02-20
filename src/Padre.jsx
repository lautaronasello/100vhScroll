import React, { useEffect, useState } from 'react';
import './styles.css';
import Hijo from './Hijo.jsx';
const Padre = () => {
  const [idHijo, setIdHijo] = useState(1);

  const sectionsBd = [
    {
      id: 1,
      text: 'section 1',
      backgroundColor: 'red',
    },
    {
      id: 2,
      text: 'section 2',
      backgroundColor: 'green',
    },
    {
      id: 3,
      text: 'section 3',
      backgroundColor: 'yellow',
    },
    {
      id: 4,
      text: 'section 4',
      backgroundColor: 'blue',
    },
    {
      id: 5,
      text: 'section 5',
      backgroundColor: 'cian',
    },
    {
      id: 6,
      text: 'section 6',
      backgroundColor: 'black',
    },
  ];

  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = window.scrollY + window.innerHeight;
    for (const data of sectionsBd) {
      const section = document.getElementById(data.id);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (e.target.scrollTop < scrollPos) {
          //sube
          if (top < scrollPosition && bottom > scrollPosition) {
            setIdHijo(data.id - 1);
            break;
          }
        } else {
          //baja

          if (top < scrollPosition && bottom > scrollPosition) {
            setIdHijo(data.id);
            break;
          }
        }
        setScrollPos(e.target.scrollTop);
      }
    }
  };

  return (
    <div className='scroll-container' onScroll={handleScroll}>
      {sectionsBd &&
        sectionsBd.map((data) => {
          return (
            <section
              key={data.id}
              id={data.id}
              style={{ background: data.backgroundColor }}
            >
              <Hijo
                isActive={idHijo === data.id}
                text={data.text}
                idComponent={data.id}
              />
            </section>
          );
        })}
    </div>
  );
};

export default Padre;
