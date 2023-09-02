import React from 'react'
import { useParams } from 'react-router-dom'


function Animal() {

    const { name } = useParams()
    const animalInfo = {
        dog : "bark",
        cat :  "meow"
    }
    const Info  =  animalInfo [name]  || "animals not found "
  return (
    <div>
        <h1>{name}</h1>
        <p>{Info}</p>
    </div>
  )
}

export default Animal