
export default function account(state = [], action) {


    switch (action.type) {
        case 'LOGIN':
            console.log("ACTION")
            console.log(action.account)
            return state

        case 'LOREM':
            break;

        default:
            return state
    }



}