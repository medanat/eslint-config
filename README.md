# eslint-config-medanat

## Installation

```
npm i --save-dev eslint @medanat/eslint-config
```

## Usage

In your `.eslintrc`:

### For plain JS environments
```
{
  "extends": ["@medanat"]
}
```

### For Node.js environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-node
```

```
{
  "extends": ["@medanat", "@medanat/node"]
}
```

### For React environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-react
```

```
{
  "extends": ["@medanat", "@medanat/react"]
}
```

### For Flow environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-flow
```

```
{
  "extends": ["@medanat", "@medanat/flow"]
}
```

### All together now
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-flow @medanat/eslint-config-react
```

```
{
  "extends": ["@medanat", "@medanat/react", "@medanat/flow"]
}
```