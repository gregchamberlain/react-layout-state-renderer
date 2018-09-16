# ReactLayoutStateRenderer

[![npm](https://img.shields.io/npm/v/react-layout-state-renderer.svg?style=flat-square)](https://www.npmjs.com/package/react-layout-state-renderer)
[![CircleCI](https://circleci.com/gh/gregchamberlain/react-layout-state-renderer/tree/master.svg?style=svg)](https://circleci.com/gh/gregchamberlain/react-layout-state-renderer/tree/master)

## Basic Example

```tsx
import React from 'react';
import LayoutStateRenderer from 'react-layout-state-renderer';

const CustomComponent = () => <h1>Custom Component</h1>;
const layoutState = {
  root: {
    key: 'root',
    type: 'div',
    props: {},
    metadata: {},
    children: ['1'],
  },
  '1': {
    key: '1',
    type: 'CustomComponent',
    props: {},
    metadata: {},
    children: [],
    parent: 'root',
  },
};

const MyComponent = () => (
  <LayoutStateRenderer
    layoutState={layoutState}
    rootKey="root"
    components={{ CustomComponent }}
  />
);

export default MyComponent;
```
