if (Meteor.isClient) {
 	// This has one table row of class .toggle which, when clicked, toggles a Session variable which triggers the creation of a second row. Clicking the second row, not in the same class, somehow triggers an event caught by the event map of the first class.
 
	// click, tap results in clicks on the new row being caught by the event map (and toggling existence of hidden row) 
	// tap, click does NOT have the new row toggling 
	
	// click itself also does NOT have the bug.


  // added a default value to make sure errors aren't first-event errors
  Session.setDefault('show', false);

  Template.hello.events({
    'tap .div-toggle' : function (event) {
        alert('tap!');
        toggleSession('show');
    },
    'tap .tap-toggle' : function (event) {
        alert('tap!');
        toggleSession('show');
    },
    'touchend .touchend-toggle' : function (event) {
        alert('touchend!');
        toggleSession('show');
    },
    'click .div-toggle' : function (event) {
        alert('click!');
        toggleSession('show');
      }
	});

  Template.hello.assignmentExpanded = function () {
	  return (Session.get('show'));
  }


    toggleSession = function(variable){
        if(Session.get(variable)){
            Session.set(variable, false);
        } else {
            Session.set(variable, true);
        }
    }

}




