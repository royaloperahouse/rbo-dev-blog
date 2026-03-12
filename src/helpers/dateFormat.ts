export const fullDate = new Intl.DateTimeFormat(
  'en-GB', {
    dateStyle: "full",
    timeStyle: "long",
  }
)

export const shortDateOnly = new Intl.DateTimeFormat(
  'en-GB', {
    dateStyle: "short",
    timeStyle: undefined
  }
)