// code from: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

export const isValidEmail = (email: string) => {
  if (email === "" || !email) return false
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
