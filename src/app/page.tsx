import AppSlider from "@/components/AppSlider";
import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import MenuLinks from "@/components/MenuLinks";

export default function Home() {

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="bg-background">
      <div>
        <AppSlider slides={SLIDES} options={OPTIONS} />
      </div>
      <div>
        <MenuLinks/>
      </div>

    </div>
  );
}
