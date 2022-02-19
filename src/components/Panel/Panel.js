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
      const width = (window.innerWidth - 940) ;
      this.setState({
        width,
      });
    }, 333);
  }

  render() {
    const {
      label,
      subtitle,
      content_title,
      content,
      text_color,
      activeTab,
      index,
      activateTab,
      imgurl,
    } = this.props;
    const { width } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      width: `${isActive ? `${width}px` : `280px`}`,
      backgroundImage: `url(${imgurl})`,
      color: text_color,
    };

    return (
      <div className='panel' role='tabpanel' aria-expanded={isActive}>
        <div
          className='panel__inner'
          style={innerStyle}
          aria-hidden={!isActive}
        >
          {/* <div className='panel__content-wrapper'>
            <h2 className='panel__subtitle'>{subtitle}</h2>
            <h2 className='panel__content-title'>{content_title}</h2>
            <p className='panel__content'>{content}</p>
          </div> */}
          <button className='panel__label' role='tab' onClick={activateTab}>
            <h3 className='panel__title'>{label}</h3>
          </button>
        </div>
      </div>
    );
  }
}

export default Panel;
