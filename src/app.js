import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import View from './view'
import {$on} from './helpers'
import Controller from './controller'
import Model from './model'
import Store from './store'
import Template from './template'

/**
 * Sets up a brand new Todo list.
 *
 * @param {string} name The name of your new to do list.
 */
function Todo(name) {
  this.storage = new Store(name)
  this.model = new Model(this.storage)
  this.template = new Template()
  this.view = new View(this.template)
  this.controller = new Controller(this.model, this.view)
}

// this is exported for Hot Module Replacement
export function setView() { // eslint-disable-line import/prefer-default-export
  var todo = new Todo('todos-vanillajs')
  todo.controller.setView(document.location.hash)
}

$on(window, 'load', setView)
$on(window, 'hashchange', setView)
