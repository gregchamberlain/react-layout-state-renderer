import React from 'react';

type ItemProps = {
  [key: string]: any;
};

type ItemMetadata = {
  [key: string]: any;
};

type LayoutItem = {
  key: string;
  type: string;
  props: ItemProps;
  metadata: ItemMetadata;
  children: string[];
  parent?: string;
};

type LayoutState = {
  [key: string]: LayoutItem;
};

type ComponentMap = {
  [key: string]: React.ComponentType;
};

type Props = {
  rootKey: string;
  layoutState: LayoutState;
  components: ComponentMap;
};

const LayoutStateRenderer: React.StatelessComponent<Props> = ({
  rootKey,
  layoutState,
  components,
}) => {
  const item = layoutState[rootKey];
  const type = components[item.type] || item.type;
  return React.createElement(
    type,
    item.props,
    item.children.map((childKey) => (
      <LayoutStateRenderer
        key={childKey}
        rootKey={childKey}
        layoutState={layoutState}
        components={components}
      />
    )),
  );
};

export default LayoutStateRenderer;
