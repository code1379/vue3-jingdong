import request from "./request";

export const login = (phone, password) => {
  return request.post("/api/user/login", {
    phone,
    password
  }, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};
