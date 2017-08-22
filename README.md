# eslint-config-medanat

## Installation

```
npm i --save-dev eslint eslint-config-medanat
```

## Usage

In your `.eslintrc`:

### For plain JS environments
```
{
  "extends": ["medanat"]
}
```

### For React environments
```
{
  "extends": ["medanat", "medanat/react"]
}
```

### For Flow environments
```
{
  "extends": ["medanat", "medanat/flow"]
}
```

### All together now
```
{
  "extends": ["medanat", "medanat/react", "medanat/flow"]
}
```