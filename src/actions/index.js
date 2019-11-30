import types from './types';
import axios from 'axios';

export function getGradeData() {
    return async function (dispatch) {
        const resp = await axios.get('/api/grades');
        dispatch({
            type: types.GET_GRADE_DATA,
            grades: resp.data
        })
    }
}

export const addGradeRecord = (gradeData) => async (dispatch) => {
    const resp = await axios.post('/api/grades', gradeData);

    dispatch({
        type: types.ADD_GRADE_RECORD,
        grade: resp.data
    })
}

export function deleteGradeRecord(id, index) {
    return async function (dispatch, getState) {
        await axios.delete(`/api/grades/${id}`);
        const { grades } = getState();
        const list = [...grades.list];
        list.splice(index, 1);

        dispatch({
            type: types.DELETE_GRADE_RECORD,
            list: list
        })
    }
}