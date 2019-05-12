import $ from "jquery";
export const UPDATE_USER = "users:updateUser";
export const SHOW_ERROR = "users:Show Error";

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: "ERROR !!"
    }
  };
}

export function apiRequest() {
  return dispatch => {
    $.ajax({
      url:
        "https://eodhistoricaldata.com/api/real-time/AAPL.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&fmt=json",
      contentType: "application/json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      success: function(result) {
        console.log("api success", result);
        dispatch(updateUser(result.newUser));
      },
      error() {
        console.log("ERROR");
        dispatch(showError());
      }
    });
  };
}
