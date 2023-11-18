import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {

  let { id } = useParams()
  console.log(id)
  return (
    <div>SIngleMoviePage</div>
  )
}

export default SingleMoviePage