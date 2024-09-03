// MovieCast
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const { movieId } = useParams();
useEffect(() => {
    if (!movieId) return;
}, [movieId])