import PropTypes from 'prop-types'
import React from 'react'
import renderTimestamp from "./renderTimestamp"

export class Info extends React.PureComponent {
  render() {
    const {pipeline, now} = this.props

    return <div className="pipeline-info">
      <div>
        <span>{pipeline.commit ? pipeline.commit.author : '-'}</span>
        <span>{pipeline.commit ? `'${pipeline.commit.title}'` : '-'}</span>
      </div>
      <div>
        <span>{renderTimestamp(pipeline.stages, now)}</span>
        <span>on {pipeline.ref}</span>
      </div>
    </div>
  }
}

Info.propTypes = {
  pipeline: PropTypes.object,
  now: PropTypes.number
}
