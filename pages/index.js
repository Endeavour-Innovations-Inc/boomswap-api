import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://boomswap-api.netlify.app/.netlify/functions/fetchTokens')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
