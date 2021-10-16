import { useEffect, useState } from "react"


const useLoadData=(selectFoodList)=>{
    const[allValues,setAllValues]=useState([]);
    useEffect(()=>{
        fetch("/foodItemsList.json")
        .then(res=>res.json())
        .then(data=>setAllValues(data))
    },[selectFoodList]);
    return [allValues];
};

export default useLoadData;