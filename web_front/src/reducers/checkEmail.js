const etat = (state = {code:"email invalide",used:true},action) => {

    switch (action.type) {
        case "GOOD_EMAIL":
            state={code:"email valide",used:false}
            return state
        case "BAD_EMAIL":
            console.log(action.payload)
            state={code:action.payload,used:true}
            return state
        default:
            return state
    }
}

export default etat