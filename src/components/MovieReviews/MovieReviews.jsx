// MovieReviews
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// фді фільма який отримали з рядка запиту
const { movieId } = useParams();
useEffect(() => {
    if (!movieId) return;
}, [movieId])