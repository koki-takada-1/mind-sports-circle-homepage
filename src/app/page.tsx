import { Active } from "@/components/active/active";
import Footer from "@/components/footer/footer";
import { MainHome } from "@/components/mainhome/mainhome";
import { Intro } from "@/components/ui/intro/intro";
export default function Home() {
  return (
    <>
      <Intro />
      <br></br>
      <MainHome />
      <br></br>
      <Active />
      <br></br>
      <Footer />
    </>
  );
}
