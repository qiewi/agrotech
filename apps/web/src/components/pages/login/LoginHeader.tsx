import Image from "next/image"

interface LoginHeaderProps {
  imageSrc: string
  altText: string
}

export function LoginHeader({ imageSrc, altText }: LoginHeaderProps) {
  return (
    <div className="w-full px-6 pt-8 flex flex-col items-center">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={altText}
        width={1000}
        height={700}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
