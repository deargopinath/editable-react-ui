import React from 'react'
import {Page, withModel, EditorContext, Utils} from '@adobe/cq-react-editable-components'

class HomePage extends Page {
    render() {
      return (
        <div className="App">
            <EditorContext.Provider value={Utils.isInEditor}>
                {super.childComponents}
                {super.childPages}
            </EditorContext.Provider>
        </div>
     )
    }
}
export default withModel(HomePage)
