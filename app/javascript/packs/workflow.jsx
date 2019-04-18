import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DesignImg from 'images/design.png'

class Workflow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previousStage: 0,
      currentStage: 0,
      stroke: 100.5
    }
  }


  workflowGraphic() {
    return(
      <div className="graphic-holder">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path className="circle" id="circle"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"/>
        </svg>
        <div className="workflow-window">
          <img src={DesignImg} alt="" className="design-image"/>
        </div>
      </div>
    )
  }

  onStageClick (stage , stageNumber) {
    let previous = this.state.currentStage;
    this.setState({
      previousStage: previous,
      currentStage: stageNumber
    });
    let diff = (previous - stageNumber) * 17;
    let previousStroke = this.state.stroke;
    this.setState({ stroke: previousStroke + diff });
    circle.style.strokeDashoffset = previousStroke + diff;
    const clickedStage = document.getElementById(stage)
    const unclickedStages = document.querySelectorAll('.stage')
    const unclicked = Array.from(unclickedStages);
    const clickedIndex = unclicked.indexOf(clickedStage);
    unclicked.splice(clickedIndex, 1);

    Array.prototype.forEach.call(unclicked, stage => {
      stage.classList.remove('active-stage')
    });
    clickedStage.classList.toggle('active-stage');

  }

  render() {
    return(
      <div className="workflow-container">
        <div className="workflow-holder">
          {this.workflowGraphic()}
          <div className="tabs">
            <div className="stages">
              <h4>Every project we develops goes through a four stage process to enure that we deliver only the highest qualit end result to our clients.</h4>
              <div className="stage stage-one" id="stage1" onClick={() => this.onStageClick('stage1', 1)}>
                <h3 className="stage-title">Ideation</h3>
                <p className="stage-text">At the start of a project we like to sit down with you clients and really delve into what pain they are aiming to aleviate and then we tell them to go fuck themselves.</p>
              </div>
              <div className="stage stage-two" id="stage2" onClick={() => this.onStageClick('stage2', 2)}>
                <h3 className="stage-title">Wireframe & Design</h3>
                <p className="stage-text">At the start of a project we like to sit down with you clients and really delve into what pain they are aiming to aleviate and then we tell them to go fuck themselves.</p>
              </div>
              <div className="stage stage-three" id="stage3" onClick={() => this.onStageClick('stage3', 3)}>
                <h3 className="stage-title">Build Stage</h3>
                <p className="stage-text">At the start of a project we like to sit down with you clients and really delve into what pain they are aiming to aleviate and then we tell them to go fuck themselves.</p>
              </div>
              <div className="stage stage-four" id="stage4" onClick={() => this.onStageClick('stage4', 4)}>
                <h3 className="stage-title">Release</h3>
                <p className="stage-text">At the start of a project we like to sit down with you clients and really delve into what pain they are aiming to aleviate and then we tell them to go fuck themselves.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Workflow;
