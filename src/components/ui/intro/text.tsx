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
          className="text-black mix-blend-multiply text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold outline-text"
          animation="blurInUp"
          by="character"
        >
          Welcome to Mind Sports Circle
        </TextAnimate>
      </div>
    </>
  );
}
