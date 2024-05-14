import Link from "next/link"
const HeroSignUpLink = () => {
  return (
    <div className="w-full">
      <Link href='signup' className="h-[44px] flex items-center justify-center text-lg  font-semibold bg-primary border-none rounded-md text-white hover:bg-hoverPrimary">Get Started</Link>
    </div>
  )
}

export default HeroSignUpLink