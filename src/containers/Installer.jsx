import { connect } from 'react-redux'

import InstallerView from '../components/InstallerView'
import { installApp } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  slug: state.slug,
  appUrl: state.appUrl
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (slug, appUrl) => {
    return dispatch(installApp(slug, appUrl))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InstallerView)
