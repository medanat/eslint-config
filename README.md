# eslint-config-medanat

## Installation

```
npm i --save-dev eslint @medanat/eslint-config
```

## Usage

In your `eslint.config.js`:

### For plain JS environments
```js
import eslintConfig from '@medanat/eslint-config';

export default [
  ...eslintConfig
];
```

### For Node.js environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-node
```

```js
import eslintConfig from '@medanat/eslint-config';
import eslintConfigNode from '@medanat/eslint-config-node';

export default [
  ...eslintConfig,
  ...eslintConfigNode
];
```

### For React environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-react
```

```js
import eslintConfig from '@medanat/eslint-config';
import eslintConfigReact from '@medanat/eslint-config-react';

export default [
  ...eslintConfig,
  ...eslintConfigReact
];
```

### For Flow environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-flow
```

```js
import eslintConfig from '@medanat/eslint-config';
import eslintConfigFlow from '@medanat/eslint-config-flow';

export default [
  ...eslintConfig,
  ...eslintConfigFlow
];
```

### For Storybook environments
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-storybook
```

```js
import eslintConfig from '@medanat/eslint-config';
import eslintConfigStorybook from '@medanat/eslint-config-storybook';

export default [
  ...eslintConfig,
  ...eslintConfigStorybook
];
```

### All together now
```
npm i --save-dev eslint @medanat/eslint-config @medanat/eslint-config-flow @medanat/eslint-config-react @medanat/eslint-config-storybook
```

```js
import eslintConfig from '@medanat/eslint-config';
import eslintConfigReact from '@medanat/eslint-config-react';
import eslintConfigFlow from '@medanat/eslint-config-flow';
import eslintConfigStorybook from '@medanat/eslint-config-storybook';

export default [
  ...eslintConfig,
  ...eslintConfigReact,
  ...eslintConfigFlow,
  ...eslintConfigStorybook
];
```