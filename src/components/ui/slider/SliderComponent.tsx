
import * as Slider from '@radix-ui/react-slider';
import s from './slider.module.scss'
import {useState} from "react";
type SliderComponentProps = {

};

export const SliderComponent = ({}: SliderComponentProps) => {
  const [thumbValues, setThumbValues] = useState<[number, number]>([50, 70]);
  return (
      <form>
        <div className={s.sliderContainer}>
        <div>{thumbValues[0]}</div>
        <Slider.Root className={s.SliderRoot} defaultValue={[50,70]}  max={100} minStepsBetweenThumbs={1}
                     onValueChange={(newValues) => setThumbValues(newValues as [number, number])}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>


          <Slider.Thumb className={s.SliderThumb} aria-label="Lower Thumb" />
          <Slider.Thumb className={s.SliderThumb} aria-label="Upper Thumb" />

        </Slider.Root>
        <div>{thumbValues[1]}</div>
        </div>
      </form>
  )
}






