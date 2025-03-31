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
        <div className="space-y-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{location}</p>
            <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
                <span className="text-gray-500">{reviews} reviews</span>
            </div>
        </div>
    )
}

