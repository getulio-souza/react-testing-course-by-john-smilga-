import { render, screen } from "@testing-library/react";
import List from "./List";
import { type Review } from "./Sandbox";


///mocked data to use in the tests 
const mockReviews: Review[] = [
    {email: 'test@example.com', rating: '4', text: 'great product!'},
    {email: 'test2@example.com', rating: '3', text: 'almost good!'},
]

describe("List component", ()=> {

    test("renders heading", ()=> {
        render(<List reviews={[]}/>)
        expect(screen.getByRole("heading", {level: 2, name: /reviews/i})).toBeInTheDocument()
    })

    test("displays 'No reviews yet' when reviews array is empty", ()=> {
        render(<List reviews={[]}/>)
        expect(screen.getByText(/no reviews yet/i)).toBeInTheDocument()

    })

    test("renders reviews correctly when provided", ()=> {
        render(<List reviews={mockReviews}/>)
        mockReviews.forEach((review)=> {
            expect(screen.getByText(review.email)).toBeInTheDocument()
            expect(screen.getByText(review.text)).toBeInTheDocument()

            const stars = 'star'.repeat(Number(review.rating))
            expect(screen.getByText(stars))
        })
    })
})