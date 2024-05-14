import Image from "next/image"
const HeroContent = () => {
  return (
   
      <section className="h-full w-full flex flex-col items-center text-center pt-12">
      <h1 className="text-md "><span className="text-2xl font-bold">Harmonize Your Events:</span><br/> Streamline Music Management with Our SaaS Solution</h1>
      <Image src="/assets/hero_image.png" alt="Hero Image" width={400} height={400} />
      </section>

  )
}

export default HeroContent