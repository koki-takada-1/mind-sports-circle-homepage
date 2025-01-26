import { TextAnimate } from "@/components/ui/text-animate";

export function TextAnimateDemo() {

  return (
    <>
      <div className="block sm:hidden">
        <TextAnimate
          className="text-black mix-blend-multiply text-4xl font-bold outline-text"
          animation="blurInUp"
          by="character"
        >
          Welcome to
        </TextAnimate>
        <TextAnimate
          className="text-black mix-blend-multiply text-4xl font-bold outline-text"
          animation="blurInUp"
          by="character"
        >
          Mind Sports Circle
        </TextAnimate>
      </div>
      <div className="hidden sm:block">
        <TextAnimate
          className="text-black mix-blend-multiply text-9xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold outline-text"
          animation="blurInUp"
          by="character"
        >
          Welcome to Mind Sports Circle
        </TextAnimate>
      </div>
    </>
  );
}
