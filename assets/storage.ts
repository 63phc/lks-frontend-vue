export function set(key: string, value: any) {
  if (process.client)
    window.localStorage[key] = JSON.stringify(value);
}

export function get(key: string) {
  if (process.client)
    return JSON.parse(window.localStorage[key] ? window.localStorage[key] : 'null')
}

export function push(arr_key: string, value: any) {
  const a = get(arr_key)
  a.push(value)
  set(arr_key, a)
}