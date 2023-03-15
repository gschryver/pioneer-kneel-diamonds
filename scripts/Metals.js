import { getMetals, setMetal, getOrderBuilder } from "./database.js"

const metals = getMetals()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    const currentOrder = getOrderBuilder()
    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {

        html += `<li id="metal--${metal.id}">
            <input type="radio" name="metal" value="${metal.id}"`

        if (currentOrder.metalId === metal.id) {
            html += 'checked="checked"'
        }

        html += `/> ${metal.metal}</li>`

    }

    html += "</ul>"
    return html
}
