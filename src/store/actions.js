// action也是函数
export const setPageTitle  = function(data) {
    return (dispatch, getState) => {
      dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
  }
export const setInfoList = function(data){
    return (dispatch,getState) => {
      dispatch({ type: 'SET_INFO_LIST', data: data })
  }
}