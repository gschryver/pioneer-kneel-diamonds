import { getSizes, setSize, getOrderBuilder } from "./database.js"

const sizes = getSizes()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             window.alert(`User chose size ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        
        const currentOrder = getOrderBuilder()
        
        if (currentOrder.sizeId === size.id) {        
            return `<li><input type="radio" name="size" value="${size.id}" checked="checked"/> ${size.carets}</li>`
        } else {
            return `<li><input type="radio" name ="size" value="${size.id}"/> ${size.carets}</li>`
        }
        
        })

    html += listItems.join("")
    html += "</ul>"

    return html
}

