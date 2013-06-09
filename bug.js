if (Meteor.isClient) {
 	// This has one table row of class .toggle which, when clicked, toggles a Session variable which triggers the creation of a second row. Clicking the second row, not in the same class, somehow triggers an event caught by the event map of the first class.
 
	// click, tap results in clicks on the new row being caught by the event map (and toggling existence of hidden row) 
	// tap, click does NOT have the new row toggling 
	
	// click itself also does NOT have the bug.


  // added a default value to make sure errors aren't first-event errors
  Session.setDefault('show', false);

  Template.hello.events({

    // here's the first problem, event maps aren't smart enough to handle lists of events like you're doing
    // 'click, tap .assignmentRow' : function (event) {

    // rather, you neeed to do each event individually
    'tap .toggle' : function (event) {
        // confirm tap event is working
        // if toggle:hover CSS class is commented out, this will fire twice
        alert('tap!');

        // replaced 'on' and 'off' with true and false, to make sure booleans are parsed correctly
		if(Session.get('show')) {
			Session.set('show', false);
		} else {
			Session.set('show', true);
    	}
        //Meteor.flush();
    },
    'click .toggle' : function (event) {
          alert('click!');
          if(Session.get('show')) {
              Session.set('show', false);
          } else {
              Session.set('show', true);
          }
      }
	});
  Template.hello.assignmentExpanded = function () {
	  return (Session.get('show'));
  }
}
