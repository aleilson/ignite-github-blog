import moment from 'moment'

export function dateFormatFromNow(date: string) {
  return moment(date).fromNow()
}
