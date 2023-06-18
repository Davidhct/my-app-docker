import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [fetchData, setFetchData] = useState("")

  useEffect(() => {
    const getData = async () => {
      let res
      try {
        res = await axios.get("http://localhost:4000/api/data")
        setFetchData(res.data.message)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <div>{fetchData}</div>
    </>
  )
}

export default App
