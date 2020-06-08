import React from 'react'
import {MapTo} from "@adobe/cq-react-editable-components"

interface ICard {
  text: string,
  richText: boolean
}

class Card extends React.Component<ICard> {

  get richText() {
    return (<div dangerouslySetInnerHTML={ { __html : this.props.text } } />)
  }

  get plainText() {
    return (<div>{this.props.text}</div>)
  }

  render() {
    return (this.props.richText ? this.richText : this.plainText)
  }
}

export default MapTo('Card')(Card)
