import React from 'react';
import Panel from '../Panel/Panel'
import './Accordion.css'

class Accordion extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeTab: 0
		};
		
		this.activateTab = this.activateTab.bind(this);
	}
	
	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}

 
	
	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
  
		return (
			<div className='accordion' role='tablist'>
				{panels.map((panel, index) =>
             <>
					    <Panel 
						key={ index }
						activeTab={ activeTab }
						index={ index }
						{ ...panel } 
						activateTab={ this.activateTab.bind(null, index) }						
				/>
         	<div className='panel__content-wrapper' style={{opacity: `${activeTab === index ? `1` : `0`}`,color: `${panel.text_color}`,transform: `translateX(${activeTab*280}px)`} }>
            <h2 className='panel__subtitle'>{panel.subtitle}</h2>
            <h2 className='panel__content-title'>{panel.content_title}</h2>
            <p className='panel__content'>{panel.content}</p>
          </div> 
        </> 							
				)}
				
			</div>
			  
		);
	}
}

export default Accordion