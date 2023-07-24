import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_KEY } from '../helpers/constants';
import SuggestionCard from './SuggestionCard';
import { Link } from 'react-router-dom';
import { addDetails } from '../store/reducers/videoInfoSlice';

const RelatedSuggestions = () => {

  const [relatedSuggestions, setRelatedSuggestions] = useState([]);
  const dispatch = useDispatch();

  const { id } = useSelector((state)=>state.info);
  useEffect(()=>{
    getRelatedSuggestions();
  },[id])

  const getRelatedSuggestions =async ()=>{
    const response = await fetch(`http://localhost:3001/api/relatedsuggestions?&key=${API_KEY}&id=${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"Application/json",
      },
    })
    const json=await response.json();
    console.log(json?.data?.items)
    setRelatedSuggestions(json?.data?.items);
  }
  return (
    <div>
      {relatedSuggestions && relatedSuggestions.map((suggestion)=>(
        <Link to={"?v="+suggestion?.id.videoId}
          onClick={()=>dispatch(addDetails(suggestion?.id?.videoId))}>
        <SuggestionCard key={suggestion?.id?.videoId} suggestion={suggestion}/>
         </Link>
      ))}
    </div>
  )
}

export default RelatedSuggestions