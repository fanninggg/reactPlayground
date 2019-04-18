import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Workflow extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    test: ''
  }

  workflowGraphic() {
    return(
      <div className="graphic-holder">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path className="circle" id="circle"
            strokeDasharray="0.1, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
        <div className="workflow-window"></div>

      </div>
    )
  }

  fillWorkFlow(stage) {
    if (stage == 'stage1') {
      document.getElementById('circle').classList.remove('stage-two')
      document.getElementById('circle').classList.remove('stage-three')
      document.getElementById('circle').classList.remove('stage-four')
      document.getElementById('circle').classList.add('stage-one')
    } else if (stage == 'stage2') {
      document.getElementById('circle').classList.remove('stage-one')
      document.getElementById('circle').classList.remove('stage-three')
      document.getElementById('circle').classList.remove('stage-four')
      document.getElementById('circle').classList.add('stage-two')
    } else if (stage == 'stage3') {
      document.getElementById('circle').classList.remove('stage-one')
      document.getElementById('circle').classList.remove('stage-two')
      document.getElementById('circle').classList.remove('stage-four')
      document.getElementById('circle').classList.add('stage-three')
    } else if (stage == 'stage4') {
      document.getElementById('circle').classList.remove('stage-one')
      document.getElementById('circle').classList.remove('stage-two')
      document.getElementById('circle').classList.remove('stage-three')
      document.getElementById('circle').classList.add('stage-four')
    }
  }

  onStageClick(stage) {
    const clickedStage = document.getElementById(stage)
    const unclickedStages = document.querySelectorAll('.stage')
    const unclicked = Array.from(unclickedStages);
    const clickedIndex = unclicked.indexOf(clickedStage)
    delete unclicked[clickedIndex]

    Array.prototype.forEach.call(unclicked, stage => {
      stage.classList.remove('active-stage')
    });
    clickedStage.classList.toggle('active-stage');

    this.fillWorkFlow(stage)
  }

  render() {
    return(
      <div className="workflow-container">
        <div className="workflow-holder">
          {this.workflowGraphic()}
          <div className="tabs">
            <div className="stages">
              <h4>Every project we develops goes through a four stage process to enure that we deliver only the highest qualit end result to our clients.</h4>
              <div className="stage stage-one" id="stage1" onClick={() => this.onStageClick('stage1')}>
                <h3 className="stage-title">Ideation</h3>
                <p className="stage-text">At the start of a project we like to sit down with you clients and really delve into what pain they are aiming to aleviate and then we tell them to go fuck themselves.</p>
              </div>
              <div className="stage stage-two" id="stage2" onClick={() => this.onStageClick('stage2')}>
                <h3 className="stage-title">Wireframe & Design</h3>
                <p className="stage-text">At the start of a project we like to sit down with you clients and really delve into what pain they are aiming to aleviate and then we tell them to go fuck themselves.</p>
              </div>
              <div className="stage stage-three" id="stage3" onClick={() => this.onStageClick('stage3')}>
                <h3 className="stage-title">Build Stage</h3>
                <p className="stage-text">At the start of a project we like to sit down with you clients and really delve into what pain they are aiming to aleviate and then we tell them to go fuck themselves.</p>
              </div>
              <div className="stage stage-four" id="stage4" onClick={() => this.onStageClick('stage4')}>
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
