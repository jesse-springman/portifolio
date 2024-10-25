
 // import { useState, useEffect, useRef } from "react"
import { Cont  } from "./styleSobre";
import { ContTest } from "./cont";
import { useInView } from "react-intersection-observer";


export const SobreMim = () => {

  //  const [textoVisivel, setTextoVisivel] = useState(false);
  //  const [deslocaX, setDeslocaX] = useState(0);
   //const textoSobreMim = useRef(null);


  const { ref, inView } = useInView({

    threshold: 0.1, 
    triggerOnce: true


  });


  
  console.log(inView);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {

  //     entries.forEach(entry  =>{

  //       console.log(entry.isIntersecting);
        
       

  //     if (entry.isIntersecting){
  //       setTextoVisivel(true);
  //        setDeslocaX(0)
  //       observer.disconnect();

  //     }

  //     else {
  //       setTextoVisivel(false)
  //        setDeslocaX(-100)
  //     }

  //   });

  // });






  //   if (textoSobreMim.current) {
  //     observer.observe(textoSobreMim.current)
  //   }


  //   return () => observer.disconnect();
  // }, []);


  // const animaTexto = useSpring({

  //   from: { transform: `translateX(-100%)  ` },
  //   to: { transform: `translateX(${deslocaX}%)` },
  //   config: { tension: 23  },

  // });

  return (

    //style={animaTexto}  ref={ref}

    <Cont ref={ref}  id="sobre"  >

          <ContTest inView={inView} />


  
    </Cont>

  );
  

};

