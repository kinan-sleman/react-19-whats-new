import { Suspense, use } from "react"

const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
export default function Use() {
    // Old Scenario
    // const [pokemon, setPokemon] = useState();
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    //         .then(res => res.json())
    //         .then(data => setPokemon(data))
    // })
    // New Scenario
    const pokemon = use(fetchPromise)

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                <code>
                    {JSON.stringify(pokemon, null, 1)}
                </code>
            </pre>
        </Suspense>
    )
}
