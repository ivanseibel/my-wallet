export const dateFormatter = new Intl.DateTimeFormat('en-IE')

export const valueFormatter = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
})
