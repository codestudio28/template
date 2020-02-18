import React from 'react';
import { observable, action, computed } from 'mobx';



class TodoStore {

@observable isEnable=true;

@action setEnableButton = (value) => {
  this.isEnable=value;
}


// Computed
@computed get getEnableButton(){
  return this.isEnable;
}




}
const store = new TodoStore();

export default store;