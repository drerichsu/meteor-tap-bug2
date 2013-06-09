if (Meteor.isClient) {

 	// This has one table row of class .toggle which, when clicked, toggles a Session variable which triggers the creation of a second row. Clicking the second row, not in the same class, somehow triggers an event caught by the event map of the first class.
 
	// click, tap results in clicks on the new row being caught by the event map (and toggling existence of hidden row) 
	// tap, click does NOT have the new row toggling 
	
	// click itself also does NOT have the bug.
	
  Template.hello.events({
    'click, tap .assignmentRow' : function (event) {
		var s = Session.get('show');
		if (s === "on") {
			Session.set('show', 'off');
		} else {
			Session.set('show', 'on');
    	}
	  }
	});
  Template.hello.assignmentExpanded = function () {
	  if (Session.equals('show','on')) {
		  return true;
	  } else {
		  return false;
	  }
  }
}
