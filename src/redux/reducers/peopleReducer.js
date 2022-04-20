export const LOAD_USERS = 'LOAD_USERS'
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS'
export const LOAD_USERS_FAIL = 'LOAD_USERS_FAIL'


const initialState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: null
}

export function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS :
      const {page, search} = action.payload

      return {
        ...state, loading: true,
        page,
        search
      }

    case LOAD_USERS_SUCCESS :
      return {
        ...state, loading: false, data: action.payload
      }

    case LOAD_USERS_FAIL :
      return {
        ...state, loading: false, error: action.payload
      }

    default : return state
  }
}