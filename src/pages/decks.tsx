import { useGetDecksQuery } from '@/services/base-api'

export const Decks = () => {
  const query = useGetDecksQuery()

  console.log(query)

  return <div>Deks</div>
}
