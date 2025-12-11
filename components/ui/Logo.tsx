import Image from "next/image"
import logo from "@/components/assets/logo.jpg";

const Logo = () => {
  return (
    <div>
        <Image src={logo} className="w-20 rounded-full"  alt="doublefxlogo" />
    </div>
  )
}

export default Logo