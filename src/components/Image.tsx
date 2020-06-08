import React from 'react'
import {MapTo} from "@adobe/cq-react-editable-components"

interface IImage {
  src: string,
  alt: string,
  title: string,
  displayPopupTitle: boolean
}

class Image extends React.Component<IImage> {

  render() {
    return (
      <div className="image">
        <img src={this.props.src} alt={this.props.alt} title={this.props.title} />
        <span className="rectangle-2">{"Caption: " + this.props.title}</span>
      </div>
    )
  }
}

export default MapTo('Image')(Image)
