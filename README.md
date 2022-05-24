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

### For Storybook environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-storybook
```

```
{
  "extends": ["@medanat", "@medanat/storybook"]
}
```

### All together now
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-flow @medanat/eslint-config-react @medanat/eslint-config-storybook
```

```
{
  "extends": ["@medanat", "@medanat/react", "@medanat/flow", "@medanat/storybook"]
}
```