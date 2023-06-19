# Simple Javascript Schema Definitions

JSON Schema is extremely verbose, and Typescript requires a transpilation step and aren't serializable or accessible at runtime.

This syntax is intended to be as simple as possible without any external dependencies.

```javascript
import { Schema } from 'schema.js'

const User = Schema({
  name: String,
  tags: [String],
  createdAt: Date,
  url: URL,
})
```


```javascript
import { Schema } from 'schema.js'

const User = Schema({
  name: String,
  email: String,
  tags: [String],
  createdAt: Date,
  url: URL,
  displayAs: () => `${name} <${email}>`,
})
```



```javascript
const User = {
  name: String,
  email: String,
  tags: [String],
  createdAt: Date,
  url: URL,
  displayAs: () => `${name} <${email}>`,
}
```