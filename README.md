# eslint-config-medanat

## Installation

```
npm i --save-dev eslint @medanat-pkgs/eslint-config
```

## Usage

In your `.eslintrc`:

### For plain JS environments
```
{
  "extends": ["@medanat-pkgs"]
}
```

### For React environments
```
npm i --save-dev eslint @medanat-pkgs/eslint-config @medanat-pkgs/eslint-config-react
```

```
{
  "extends": ["@medanat-pkgs", "@medanat-pkgs/react"]
}
```

### For Flow environments
```
npm i --save-dev eslint @medanat-pkgs/eslint-config @medanat-pkgs/eslint-config-flow
```

```
{
  "extends": ["@medanat-pkgs", "@medanat-pkgs/flow"]
}
```

### All together now
```
npm i --save-dev eslint @medanat-pkgs/eslint-config @medanat-pkgs/eslint-config-flow @medanat-pkgs/eslint-config-react
```

```
{
  "extends": ["@medanat-pkgs", "@medanat-pkgs/react", "@medanat-pkgs/flow"]
}
```