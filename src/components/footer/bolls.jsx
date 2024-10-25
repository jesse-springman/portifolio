

import { LiBoll } from "./styleFooter"

import { useSpring } from '@react-spring/web'


export const ListBolls = () => {

  const randomYstart = Math.random()* 0;
  const randomYend = Math.random()* -700;
  const randomPosition = Math.random()* 100;
  const randomT = Math.random()* 2;
  const randomF = Math.random()* 5;
  const randomSize = Math.random()* 120;

  const springs = useSpring({
    from: { transform:  `translateY(${randomYstart}px) scale(0) ` },
    to: { transform:  `translateY(${randomYend}px) scale(1) ` },
    config: { tension: ` ${randomT}`  , friction: `${randomF}` },
    loop: { reverse: true },
  });




  return (

    <>
         <LiBoll  style={{...springs, left: `${randomPosition}vw` , top:  `${randomYend}`, width:`${randomSize}px`,  height:`${randomSize}px` }} ></LiBoll>
    
    </>

  )


}








