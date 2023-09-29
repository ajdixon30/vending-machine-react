import { createAction } from "@reduxjs/toolkit";

export const buttonPress = createAction('BUTTON_PRESS', (input, itemsArr) => {
    return {
        payload: {
            input,
            message: "",
            items: itemsArr
        }
    }
})

export const validPurchase = createAction('VALID_PURCHASE', (message, alteredItems) => {
    return {
        payload: {
            input: "",
            message,
            items: alteredItems
        }
    }
})

export const invalidPurchase = createAction('INVALID_PURCHASE', (message, itemsArr) => {
    return {
        payload: {
            input: "",
            message,
            items: itemsArr
        }
    }
})

// export const itemSelection = (position, itemsArr) => {
//     return (dispatch) => {
//         const selectedItem = itemsArr.filter((item) => item.position === position);
//         if (selectedItem.quantity) {
//             const alteredItems = itemsArr.map((item) => {
//                 if (item.name === selectedItem.name) {
//                     item.quantity--;
//                     return item;
//                 }
//                 return item;
//             })
//             dispatch(validPurchase(alteredItems, "Vending..."));
//         } else if (!selectedItem.quantity) {
//             dispatch(invalidPurchase("This item is out of stock. Please select another item.", itemsArr));
//         } else {
//             dispatch(invalidPurchase("Invalid Selection. Please select another item.", itemsArr))
//         }
//     }
// }