const surveyJson = {
    pages: [{
      name: "PersonalDetails",
      elements: [{
        type: "text",
        name: "FirstName",
        title: "Enter your first name:"
      }, {
        type: "text",
        name: "LastName",
        title: "Enter your last name:"
      }, {
        type: "panel",
        name: "Contacts",
        title: "Contacts (optional)",
        elements: [{
          type: "text",
          name: "GitHub"
        }]
      }]
    }]
  };
  
  const survey = new Survey.Model(surveyJson);
  
  // Add a title to the GitHub question
  const github = survey.getQuestionByName("GitHub");
  if (github) {
    github.title = "GitHub username:"
  }
  // Configure the Contacts panel
  const panel = survey.getPanelByName("Contacts");
  if (panel) {
    // Collapse the panel
    panel.state = "collapsed";
  
    // Add a Telegram question to the panel
    const telegram = panel.addNewQuestion("text", "Telegram");
    telegram.title = "Telegram:"
  }
