const submitData = (userName, userEmail) => {
  let userData = {
    name: userName,
    email: userEmail,
  };

  //   need return to pass lab tests - not normally necessary
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((resp) => resp.json())
    .then((data) => document.body.append(data.id))
    .catch((err) => document.body.append(`Error: ${err.message}`));
};
