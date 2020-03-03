import React, { Component } from "react";

class Tabs extends Component {
  static defaultProps = {
    classPrefix: 'tabs',
    onChange: () => {}
  }

  constructor(props) {
    super(props);

    const currProps = this.props;

    let activeIndex = 0;
    if ("activeIndex" in currProps) {
      activeIndex = currProps.activeIndex;
    } else if ("defaultActiveIndex" in currProps) {
      activeIndex = currProps.defaultActiveIndex;
    }

    this.state = {
      activeIndex,
      prevIndex: activeIndex
    };
  }

  componentDidMount() {

  }

  getTabPanes() {
    const { classPrefix, activeIndex, panels, isActive } = this.props;
    return React.Children.map(panels, (child) => {
      if (!child) { return; }
      const order = parseInt(child.props.order, 10);
      const isActive = activeIndex === order;
      return React.cloneElement(child, {
        classPrefix,
        isActive,
        children: child.props.children,
        key: `tabpane-${order}`,
      });
    });
  }

  getTabs() {
    const { classPrefix, activeIndex, panels } = this.props;
    return React.Children.map(panels, (child) => {
      if (!child) { return ; }
      const order = parseInt(child.props.order, 10);
    })
  }

  render() {
  return <div className="ui-tabs">{this.getTabPanes()}</div>;
  }
}

export default Tabs;
