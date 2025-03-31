import { Star } from "lucide-react"

interface ProfileHeaderProps {
    name: string
    location: string
    rating: number
    reviews: number
}

/**
 * Displays the caregiver's name, location, and rating information
 */
export default function ProfileHeader({ name, location, rating, reviews }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col items-start gap-4 ">
            <h1 className="text-h4  text-neutral-12">{name}</h1>
            <p className="text-small-text">{location}</p>
            <div className="flex items-center gap-1 space-x-1 text-small-text">
                <Star className="w-4 h-4 fill-black" />
                <span className="font-medium">{rating}</span>
                <span className="text-gray-500 underline">{reviews} reviews</span>
            </div>
        </div>
    )
}

