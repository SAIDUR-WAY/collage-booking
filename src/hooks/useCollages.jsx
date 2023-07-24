import { useEffect, useState } from "react";



const useCollages = () => {
     const [collages, setCollages] = useState([])
     const [loading, setLoading] = useState(true)
     useEffect(()=>{

                    fetch('https://collage-booking-server-sigma.vercel.app/collages')
               .then(res => res.json())
               .then(data => {
                    setCollages(data)
                    setLoading(false)
               })
     }, [])
     return [collages, loading];
};

export default useCollages;