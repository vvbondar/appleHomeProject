import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/login", {credentials}).then(res => res.data.user),
    register: data =>
      axios.post("/register", {data}).then(res => res.data.user)
  }
}
