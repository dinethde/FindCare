import Image from "next/image"
import { Star } from "lucide-react"

interface RatingSectionProps {
  rating: number
  date: string
  review: string
  reviewer: string
  reviewerImage: string
}

/**
 * Displays a featured review with rating
 * with horizontal scrolling capability
 */
export default function RatingSection({ rating, date, review, reviewer, reviewerImage }: RatingSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="text-4xl font-bold text-center">{rating.toFixed(1)}</div>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="min-w-full bg-gray-50 p-4 rounded-lg">
          <div className="text-center text-sm text-gray-600">
            <div className="font-medium">Household Favourite</div>
            <p className="mt-2">{review}</p>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1">{date}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src={reviewerImage || "/placeholder.svg"} alt={reviewer} fill className="object-cover" />
            </div>
            <div className="text-sm">{reviewer}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

