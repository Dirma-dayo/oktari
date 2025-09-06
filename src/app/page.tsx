import Button from "../component/button";
import Carousel from "../component/carousel";
import { course } from "@/data/course";
import { showcase } from "@/data/showcase";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8">
      {/* top section */}
      <section className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded">
        {/* image on left/top */}
        <img
          src="/segibiru.png"
          alt="logo"
          className="w-auto h-auto max-w-full md:max-w-[200px] object-contain mb-4 md:mb-0 md:mr-6"
        />

        {/* text on right/bottom */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Welcome to Octary</h2>
          <p className="mt-2">some short description here, like neofetch output</p>
          <Button text="Start chatbot" href="/chatbot" />
        </div>
      </section>

      {/* mid section */}
      <section className="bg-white p-8 rounded shadow">
  <div className="flex justify-center mb-4">
    <a href="/showcase" className="px-3 py-2 rounded hover:bg-white hover:text-blue-600">
      Showcase
    </a>
  </div>
  <Carousel items={showcase} slidesToShow={1} />
</section>


      {/* bottom section */}
      <section className="bg-gray-200 p-8 rounded">
        <h2 className="text-2xl font-bold">bottom section</h2>
        <Carousel items={course} />
        <p className="mt-2">extra info, links, etc.</p>
      </section>
    </div>
  );
}
