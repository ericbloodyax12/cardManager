import { useGetDecksQuery } from '@/services/base-api'

export const Decks = () => {
  const {data} = useGetDecksQuery()

  console.log(data)

  return <div>
    <ul>
        {data?.items.map((i)=> <li>{i.name}</li> )}
    </ul>

  </div>
}
