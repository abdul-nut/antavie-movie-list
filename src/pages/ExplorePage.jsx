import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Card from "../components/Card";
import ArtisCard from "../components/ArtisCard";

const ExplorePage = () => {
  const params = useParams()
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState([])
  const [totalPage, setTotalPage] = useState(0)


  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo
        }
      })
      setData((pre) => {
        return [
          ...pre, ...response.data.results
        ]
      })
      setTotalPage(response.data.total_pages)
    } catch (error) {
      console.log('error', error);
    }
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((pre) => pre + 1)
    }
  }

  useEffect(() => {
    fetchData()
  }, [pageNo])

  useEffect(() => {
    setPageNo(1)
    setData([])
    fetchData()
  }, [params.explore])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="pt-16 text-center">
      <div className="container mx-auto lg:block flex flex-col items-center">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-2">Popular {params.explore} Show</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6">
          {data.map((exploreData) => params.explore === "movie" || params.explore === "tv" ? (
            <Card
              data={exploreData}
              key={exploreData.id + "exploreSection"}
              media_type={params.explore}
            />
          ) : <ArtisCard data={exploreData} key={exploreData.id + "exploreSection"} />)}
        </div>
      </div>
    </div>


  )
}

export default ExplorePage