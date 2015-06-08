Bustle.ApplicationController = Ember.Controller.extend({
   isSocialShowing: false,
  actions: {
    toggleSocialOn: function() {
      console.log("social button entered");
      //debugger
      this.set('isSocialShowing', true);
    },
    toggleSocialOff: function() {
      console.log("social button left");
      this.set('isSocialShowing', false);
    }
  }
});

// Bustle.ApplicationView = Ember.View.extend({
//   isSocialShowing: true,
//   mouseEnter: function(evt) {
//     console.log('start info');
//     this.set('isSocialShowing', true);
//   },
//   mouseLeave: function(evt) {
//     console.log('stop info');
//   }
// })
