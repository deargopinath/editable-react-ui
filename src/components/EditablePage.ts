import {Page, MapTo, withComponentMappingContext}
  from "@adobe/cq-react-editable-components"

class EditablePage extends Page {
  get containerProps() {
    let attrs = super.containerProps
    attrs.className = ('editable-page container')
    return attrs
  }
}

export default MapTo('EditablePage')(withComponentMappingContext(EditablePage, null))
