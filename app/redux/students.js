import axios from 'axios';
// action
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT'
const CREATE = 'CREATE_STUDENT';
export const REMOVE = 'REMOVE_STUDENT';
const UPDATE = 'UPDATE_STUDENT';
// action creator
const selectStudents = students => ({ type: GET_STUDENTS, students });
const selectStudent = student => ({ type: GET_STUDENT, student });
const create = student => ({ type: CREATE, student });
const remove = id => ({ type: REMOVE, id });
const update = student => ({ type: UPDATE, student });
//reducer
export default function reducer(students = [], action) {
    switch (action.type) {

        case GET_STUDENTS:
            return action.students;

        case GET_STUDENT:
            return [action.student];

        case CREATE:
            return [action.student, ...students];

        case REMOVE:
            return students.filter(student => student.id !== action.id);

        case UPDATE:
            return students.map(student => (
                action.student.id === student.id ? action.student : student
            ));

        default:
            return students;
    }
}
//thunk
export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(selectStudents(res.data)));
};

export const fetchStudent = (id) => dispatch => {
    axios.get(`/api/students/${id}`)
        .then(res => dispatch(selectStudent(res.data)))
};

export const removeStudent = id => dispatch => {
    dispatch(remove(id));
    axios.delete(`/api/students/${id}`)
        .catch(err => console.error(`Removing student: ${id} unsuccesful.`, err));
};

export const addStudent = student => dispatch => {
    axios.post('/api/students', student)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating student: ${student} unsuccesful.`, err));
};

export const updateStudent = (id, student) => dispatch => {
    axios.put(`/api/students/${id}`, student)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating student: ${student} unsuccesful.`, err));
};

