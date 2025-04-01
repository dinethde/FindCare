import Image, { StaticImageData } from "next/image"
import { Star } from "lucide-react"

interface reviews {
  rating: number
  date: string
  review: string
  reviewer: string
  reviewerImage: string | StaticImageData
}

interface RatingSectionProps {
  reviews: reviews[]
}

/**
 * Displays a featured review with rating
 * with horizontal scrolling capability
 */
export default function RatingSection({ reviews }: RatingSectionProps) {
  return (
    <div className="flex flex-col gap-5 bg-[#F6F3EE] p-5 text-neutral-10">
      <div className="flex items-center justify-center">
        <div className="text-4xl font-bold text-center">5</div>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="min-w-full bg-gray-50">
          <div className="text-center text-small-text text-gray-600">
            <div className="text-h6">Household Favourite</div>
            <p className="mt-2 text-neutral-7"><span className="leading-[1.5]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum dolorum repellat nam, optio, ullam nostrum doloribus quae, nemo voluptas corporis voluptate beatae quisquam fuga maiores voluptatem? Aliquam, praesentium eius.</span></p>
          </div>

        </div>
      </div>
      <div className="w-full flex gap-4 overflow-x-auto">

        {
          reviews.map((review, index) => (
            <div key={index} className="flex flex-shrink-0 flex-col gap-4 bg-[#F9F7F6] border-[0.5px] border-neutral-4 rounded-md w-72 p-3">
              <div className="flex items-center justify-between text-xsmall-text text-gray-500 ">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 stroke-none fill-[#B3A899]
              " />
                  ))}
                  <span className="text-neutral-7 ml-2">{review.date}</span>
                </div>
              </div>

              <div className="text-xsmall-text">
                <p className="leading-[1.5]">{review.review}</p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={review.reviewerImage || "/placeholder.svg"} alt={review.reviewer} fill className="object-cover" />
                </div>
                <div className="">
                  <div className="text-tagline">{review.reviewer}</div>
                  <div className="text-xsmall-text text-neutral-7">{review.reviewer}</div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div >
  )
}

