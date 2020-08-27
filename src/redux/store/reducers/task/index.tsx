import { combineReducers } from 'redux'



const initialState = {
    list: [
        { id: 1, title: "Entretien", message: "Entretien alternance à ne pas rater", createDate: new Date(2018, 8, 25), editDate: new Date(2018, 8, 26), traitDate: new Date(2018, 8, 27) },
        { id: 2, title: "RDV Dentiste", message: "Soin dentaire", createDate: new Date(2018, 6, 12), editDate: new Date(2018, 6, 22), traitDate: new Date(2018, 7, 20) },
        { id: 3, title: "Tournoi", message: "Tournoi de football 5 vs 5", createDate: new Date(2018, 6, 12), editDate: new Date(2018, 6, 22), traitDate: new Date(2018, 7, 20) }


    ]
}

const list = (state = initialState.list, action: any) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...action.payload,
            };
        case 'CREATE':
            return [
                ...state,action.payload,
            ]
               
            
        default:
            return state;
    }
}

export default combineReducers({
    list,   
});