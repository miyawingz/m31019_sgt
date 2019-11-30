// Build middleware here
export default (store) => (next) => (action) => {
    if (typeof action !== 'function') {
        return next(action);
    }

    return action(store.dispatch);
}

//ES5 Example
// export default function (store) {
//     return function (next) {
//         return function (action) {
//             //code goes here
//         }
//     }
// }