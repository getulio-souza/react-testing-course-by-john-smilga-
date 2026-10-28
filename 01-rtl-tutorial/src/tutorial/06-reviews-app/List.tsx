import { type Review } from "./Sandbox"

type ListProps = {
    reviews: Review[]
}
const List = ({reviews}: ListProps) => {
    return(
        <>
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            {reviews.length === 0 ? (<p>No Reviews yet</p>) : reviews.map((review, index)=> {
                return <article key={index} className="border p-4 rounded mb-4">
                    <div className="font-bold">{review.email}</div>
                    <div className="text-yellow-500">{'star'.repeat(Number(review.rating))}</div>
                    <div className="mt-2">{review.text}</div>
                </article>
                })}
        </div>
        </>
    )
}

export default List