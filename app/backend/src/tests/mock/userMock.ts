export const correctUserRequest = {
  "email": "admin@admin.com",
  "password": "secret_admin"
};

export const correctUserResponse = {
    "id": 1,
    "username": "Admin",
    "role": "admin",
    "email": "admin@admin.com",
    "password": "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
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