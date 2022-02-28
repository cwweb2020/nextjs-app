import { useRouter } from "next/router"


const detailPage = () => {
  const router = useRouter()

    console.log(router.query.newsId);
   
  return (
    <>
        <h1> This is the most important page</h1>

    </>
  )
}

export default detailPage