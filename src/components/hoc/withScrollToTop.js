import React from 'react';

const withScrollToTop = WrappedComponent => {
    return class extends React.PureComponent {

      componentDidUpdate(prevProps) {
          if (this.props.location !== prevProps.location) {
              window.scrollTo(0, 0);
          }
      }

      componentDidMount() {
          window.scrollTo(0, 0);
      }

      render() {
          return (
              <WrappedComponent {...this.props}/>
          );
      }
    };
};

export default withScrollToTop;