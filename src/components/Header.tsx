import React from 'react'
import {MapTo} from "@adobe/cq-react-editable-components"

interface IHeader {
  title: string
}

class Header extends React.Component<IHeader> {
  render() {
    return (
      <header className="header">
          <div>
              <h1>{this.props.title}</h1>
          </div>
      </header>
    )
  }
}
