import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('../public/data/tokens.json')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Raw JSON Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
