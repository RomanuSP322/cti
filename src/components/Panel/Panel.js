import React from 'react';


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

      text_color,
      activeTab,
      index,
      activateTab,
      imgurl,
    } = this.props;
    const { width } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      width: `${isActive ? `${window.innerWidth - 940}px` : `280px`}`,
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

          <button className='panel__label' role='tab' onClick={activateTab}>
            <h3 className='panel__title'>{label}</h3>
          </button>
        </div>
      </div>
    );
  }
}

export default Panel;
