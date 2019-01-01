import React, { Component } from 'react'
import React, { Component } from 'react';


class Signup extends Component {
  render() {
    return (
      <div>
          <div class="row">
            <div class="col s12 m12 l12">
              <div class="card-panel">
                <div class="row">
                <form class="col s12">
                  <h4 class="header2">StackOverFlow Lite</h4>
                  <div class="row">
                    <div class="input-field col s4">
                      <i class="mdi-action-account-circle prefix"></i>
                      <input placeholder="John Doe" id="icon_prefix2" type="text" class="validate" />
                      <label for="icon_prefix">First Name</label>
                    </div>
                    <div class="input-field col s4">
                      <i class="mdi-communication-email prefix"></i>
                      <input placeholder="john@mydomain.com" id="icon_email" type="email" class="validate" />
                      <label for="icon_email">Email</label>
                    </div>
                    <div class="input-field col s4">
                      <div class="input-field col s12">
                        <button class="btn cyan waves-effect waves-light" type="submit" name="action" onclick={this.handleSubmit}><i class="mdi-action-perm-identity"></i> Register</button>
                      </div>
                    </div>
                  </div>
                </form>
                </div>
              </div>
              </div>
              </div>
            </div>
    )
  }
}

export default Signup;
