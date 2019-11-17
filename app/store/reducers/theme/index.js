const defaultState = {
    themeColor:'#cc0000'
};
export default function onAction(state=defaultState , action) {
    console.log(action)
    switch (action.type){
        case 'themeChange':
            return {...state, themeColor:action.themeColor};
        default:
            return state;
    }
}