import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
export function App() {
  return (
    <div>
      <Button
        as={'a'}
        href={
          'https://www.youtube.com/watch?v=8D9d9weVQnI&list=PLqFTZCcUCeaQ0e9QmIKVrAGEWFrIWR4nm&index=8'
        }
      >
        sdsdsd
      </Button>
      <Button>
        <Typography variant={'body1'}>button2</Typography>
      </Button>
    </div>
  )
}
