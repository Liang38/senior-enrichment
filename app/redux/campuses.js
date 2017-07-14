import axios from 'axios';
// action
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS'
const CREATE = 'CREATE_CAMPUS';
export const REMOVE = 'REMOVE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';
// action creator
const selectCampuses = campuses => ({ type: GET_CAMPUSES, campuses });
const selectCampus = campus => ({ type: GET_CAMPUS, campus });
const create = campus => ({ type: CREATE, campus });
const remove = id => ({ type: REMOVE, id });
const update = campus => ({ type: UPDATE, campus });
//reducer
export default function reducer(campuses = [], action) {
    switch (action.type) {

        case GET_CAMPUSES:
            return action.campuses;

        case GET_CAMPUS:
            return [action.campus];

        case CREATE:
            return [action.campus, ...campuses];

        case REMOVE:
            return campuses.filter(campus => campus.id !== action.id);

        case UPDATE:
            return campuses.map(campus => (
                action.campus.id === campus.id ? action.campus : campus
            ));

        default:
            return campuses;
    }
}
//thunk
export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(selectCampuses(res.data)));
};

export const fetchCampus = (id) => dispatch => {
    axios.get(`/api/campuses/${id}`)
        .then(res => dispatch(selectCampus(res.data)))
};

export const removeCampus = id => dispatch => {
    dispatch(remove(id));
    axios.delete(`/api/campuses/${id}`)
        .catch(err => console.error(`Removing campus: ${id} unsuccesful.`, err));
};

export const addCampus = campus => dispatch => {
    axios.post('/api/campuses', campus)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating campus: ${campus} unsuccesful.`, err));
};

export const updateCampus = (id, campus) => dispatch => {
    axios.put(`/api/campuses/${id}`, campus)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating campus: ${campus} unsuccesful.`, err));
};

