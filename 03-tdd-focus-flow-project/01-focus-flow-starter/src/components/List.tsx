import ItemCard from "./CardItem"
import { type Item } from "../utils"

const List = ({items, onDelete}: {items: Item[], onDelete: (id: string)=> void}) => {
    console.log(items)
    console.log(onDelete)
    return(
        <ItemCard/>
    )
}

export default List