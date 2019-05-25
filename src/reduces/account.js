
export default function account(state = [], action) {


    switch (action.type) {
        case 'LOGIN':
            return action.account

        default:
            return state
    }



}