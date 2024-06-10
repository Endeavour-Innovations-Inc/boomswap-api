import tokensData from '../data/tokens.json'

export default function Home() {
  return (
    <div>
      <pre>{JSON.stringify(tokensData, null, 2)}</pre>
    </div>
  )
}
