import { ArrowRight } from "lucide-react"
import { MessageIcon } from "@/components/icons/VuesaxIcons"

export default function AiInsightCard() {
  return (
    <div className="w-full bg-greenish text-white rounded-xl p-4 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-full">
          <MessageIcon color="#2D6948"/>
        </div>
        <p className="text-sm font-medium">
          Talk to our AI and get insights
          <br />
          on your field!
        </p>
      </div>
      <ArrowRight size={20} />
    </div>
  )
}
