import { CheckboxComponent } from '@/components/ui/ checkbox'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Typography as={'a'}>
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      <CheckboxComponent withLabel />
      <TextField variant={'default'} />
    </div>
  )
}
