import React from 'react'
import { MapTo } from '@adobe/cq-react-editable-components'

interface IBanner {
  image: string,
  heading: string,
  description: string,
  link: string,
  label: string,
  alignment: string
}

class Banner extends React.Component<IBanner> {

  get content() {
    return (
      <div> -- Banner component here -- </div>
    )
  }

  render() {
    return (
      <section className={this.props.alignment
        + "spotlight style1 image-position-center onscroll-image-fade-in"}>
        <div className="content">
            <h2>{this.props.heading}</h2>
            <p>{this.props.description}</p>
            <ul className="actions stacked">
                <li>
                    <a href={this.props.link} className="button">
                        {this.props.label}
                    </a>
                </li>
            </ul>
        </div>
        <div className="image">
            <img src={this.props.image} alt={this.props.heading} />
        </div>
      </section>
    )
  }
}

export default MapTo('Banner')(Banner)
