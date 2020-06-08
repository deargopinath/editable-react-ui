import React, {Component} from 'react'
import {Route} from 'react-router-dom'

interface ICompositeRoute {
  cqPath: string
}

export const withRoute = (WrappedComponent, extension) => {
  return class CompositeRoute extends Component<ICompositeRoute> {
    render() {
      let routePath = this.props.cqPath
      if(!routePath) {
        return <WrappedComponent {...this.props} />
      }
      extension = extension || "html"
      return (
        <Route key={routePath} path={'(.*)' + routePath + '.' + extension}
               render = {(routeProps) => {
                   return <WrappedComponent {...this.props} {...routeProps}/>
                  }
               }
        />
     )
   }
  }
}

interface IScrollToTop {
  location: string
}

class ScrollToTop extends React.Component<IScrollToTop> {

  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location) {
      window.scrollTo(0,0)
    }
  }

  render(){
    return this.props.children
  }
}

export default ScrollToTop
