import Image from "next/image"
const LogoHeader = () => {
  return (
    <div className="flex justify-center pt-2">
        <Image src="/assets/logo.png" alt="Logo" width={150} height={200} />
      </div>
  )
}

export default LogoHeader