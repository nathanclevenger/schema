export const Schema = schema => {
  // create Proxy for `schema`
  return new Proxy(schema, {
    get(target, key) {
      // if key is `default` then return `target` itself
      if (key === 'default') {
        return target
      }
      // otherwise return `target[key]`
      return target[key]
    }
  })
}