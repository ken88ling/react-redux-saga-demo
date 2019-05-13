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
      url: "https://randomuser.me/api",
      contentType: "application/json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      success: function(response) {
        console.log("api success", response.results);

        var o = response.results;

        var result = [
          {
            gender: o.gender
          }
        ];
        console.log(result.gender);
        console.log();
        // //console.log(result.map());
        //dispatch();
      },
      error() {
        console.log("ERROR");
        dispatch(showError());
      }
    });
  };
}
