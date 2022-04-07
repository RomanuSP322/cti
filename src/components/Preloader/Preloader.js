import React from 'react';
import './Preloader.css';

const Preloader = (props) => {
  console.log(props)
  const { delay = 0 } = props;
  const [ready, setReady] = React.useState(delay === 0);
  React.useEffect(() => {
    let timeout = null;
    if (!ready) {
      timeout = setTimeout(() => setReady(true), delay);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);
  if (!ready) return null;
  return (
    <div className="preloader">
<div className="triple-spinner">
</div>
</div>
  );
};

export default Preloader;


