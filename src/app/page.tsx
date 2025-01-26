import { MainHome } from "@/components/mainhome/mainhome";
import { Intro } from "@/components/ui/intro/intro";
export default function Home() {
  return (
    <>
      <Intro />
      <br></br>
      <div className="md:ml-20 md:mt-48 mt-20 flex md:flex-row flex-col items-center justify-center bg-background md:gap-32 gap-10">
        <MainHome />
        <div className="md:pr-16 sm:px-7 px-3">
          <p className="leading-10 md:leading-loose text-2xl md:text-5xl font-bold">
            マインドスポーツサークルは
          </p>
          <p className="leading-10 md:leading-loose text-2xl md:text-5xl font-bold">
            知的な遊戯に皆で興じながら知力と精神力を研き合うための団体です。
          </p>
        </div>

      </div>
    </>
  );
}
