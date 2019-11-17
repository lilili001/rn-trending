const defaultState = {
    theme:'blue'
};
export default function onAction(state=defaultState , action) {
    switch (action.type){
        case 'themeChange':
            return {...state, theme:action.theme};
        default:
            return state;
    }
}