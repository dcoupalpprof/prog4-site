import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
/*
* import React from 'react';

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
* */
const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

export default useScrollToTop;
