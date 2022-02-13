import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const width = el.querySelector('.panel__inner').scrollHeight;
      this.setState({
        width,
      });
    }, 333);
  }

  render() {
    const { label, content, activeTab, index, activateTab, imgurl } =
      this.props;
    const { width } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      width: `${isActive ? width : 100}px`,
      backgroundImage: `url(${imgurl})`
    };

    return (
      <div
        className='panel'
        role='tabpanel'
        aria-expanded={isActive}

      >
      
        <div
          className='panel__inner'
          style={innerStyle}
          aria-hidden={!isActive}
        >
            <button className='panel__label' role='tab' onClick={activateTab}>
          {label}
        </button>
          <p className='panel__content'>{content}</p>
        </div>
      </div>
    );
  }
}

export default Panel;
