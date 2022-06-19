// export const correctUserRequest = {
//   "email": "admin@admin.com",
//   "password": "as654dfdq"
// };

// export const correctUserResponse = {
//   "user": {
//     "id": 1,
//     "username": "Admin",
//     "role": "admin",
//     "email": "admin@admin.com"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJBZG1pbiIsImlhdCI6MTY1NTU4MTU3OSwiZXhwIjoxNjU2MTg2Mzc5fQ.Ia3QERgy3b0_O_TnXDrjT_klvIcrXV4EGoIu-ONvk7Q"
// }

export const correctUserRequest = {
  "email": "admin@admin.com",
  "password": "as654dfdq"
};

export const correctUserResponse = {
    "id": 1,
    "username": "Admin",
    "role": "admin",
    "email": "admin@admin.com",
    "password": "password",
  }

export const incorrectUserRequest = {
  allincorrect: {"email": "admin@admin", "password": "as65"},
  withoutemail: {"password": "as65asdasd"},
  withoutpassword: {"email": "admin@admin.com"},
  invalidemail: {"email": "admin@com", "password": "as65asdasd"},
  invalidpassword: { "email": "admin@admin.com", "password": "as" },
  unregisteredemail: { "email": "errado@nooexiste.com", "password": "as65asdasd" },
};

export const incorrectUserResponse = null

export const messagesError = {
  allincorrect: { msg: "Incorrect email or password", status: 401},
  withoutemail: { msg: "All fields must be filled", status: 400 },
  withoutpassword: { msg: "All fields must be filled", status: 400 },
  invalidemail: { msg: "Incorrect email or password", status: 401},
  invalidpassword: { msg: "Incorrect email or password", status: 401},
  unregisteredemail: { msg: "Incorrect email or password", status: 401},
}