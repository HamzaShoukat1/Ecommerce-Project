import { useEffect, useRef, useState } from 'react';
import HomeProductSkeleton from '../../components/HomeProductSkeleton'
const LazyLoader = ({ children }) => {

  const ref = useRef()
  const [visible,setVisible] = useState()
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          setVisible(true)
          observer.disconnect()
        }

      },
      {
        threshold: 0.3,
      }
    );
    if(ref.current){
      observer.observe(ref.current)
    }
    // console.log("hello",ref.current)
    return ()=> observer.disconnect()
   
  }, [])


  return <div ref={ref}>{visible ? children : <HomeProductSkeleton />}</div>
}
  


export default LazyLoader;
