export function set(key: string, value: any) {
  window.localStorage[key] = JSON.stringify(value);
}

export function get(key: string) {
  return JSON.parse(window.localStorage[key] ? window.localStorage[key] : 'null')
}

export function push(arr_key: string, value: any) {
  let a = get(arr_key)
  a.push(value)
  set(arr_key, a)
}