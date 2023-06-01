import { useParams } from "react-router-dom"

const NewsResult = () => {
    let params = useParams

  return (
    <>
        <h1>{params.newsTopic}</h1>
    </>
  )
}

export default NewsResult