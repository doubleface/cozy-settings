import React, { Component } from 'react'

// TODO
// Récupérer la valeur dans l'input
// Il faut aussi demander le slug
// Vérifier l'input, que c'est bien une adresse github
// Faire la request ajax qui passe la bonne adresse : POST /apps/:slug
// Peut-être offrir la possibilité de faire un update :PUT /apps/:slug
// Regarder les formulaires pour le changement de passphrase pour l'exemple

class InstallerView extends Component {
  doInstall () {
    this.onSubmit('files', 'https://github.com/cozy/cozy-files-v3#build')
  }

  render ({onSubmit}) {
    this.onSubmit = onSubmit
    return (
      <div>
        <input id='slug' placeholder='slug' /><br />
        <input id='repo' placeholder='https://github.com/username/repository.git#branch' />
        <button onclick={this.doInstall.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default InstallerView
