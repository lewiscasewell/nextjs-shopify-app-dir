import { Carousel } from "@/components/Carousel";
import { ScrollToBottomButton } from "@/components/ScrollToBottomButton";

export default async function Home() {
  return (
    <section className="flex md:flex-row flex-col min-h-screen bg-black">
      <div className=" px-4 md:w-1/2 my-auto min-h-[50vh] pb-24 md:pt-24 pt-32">
        <h1 className="p-4 text-7xl hover:text-white transition-colors ease-in text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-white to-zinc-600">
          What&apos;s your sock count?
        </h1>
        <p className="p-4 md:text-2xl text-lg text-zinc-400 font-light">
          Each sock is unique. So, you don&apos;t have to waste time matching
          them.
        </p>
      </div>
      <div className="md:w-1/2 bg-white flex items-center flex-wrap overflow-hidden relative min-h-screen">
        <ScrollToBottomButton />
        {/* @ts-expect-error Server component */}
        <Carousel />
      </div>
    </section>
  );
}
