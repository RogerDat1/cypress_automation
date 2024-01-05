Feature: Login tests

    Scenario: Login to Site
        Given I navigate to the login page
        When I enter "flipkart login " in the search field 
        And I click on flipkart login button
        Then I verify calendar data
        Then I verify disabled date in calendar

  #execute specific scenario 
    @focus
    Scenario: Second login attemp
        Given I navigate to the login page
        When I enter "flipkart login " in the search field 
        And I click on flipkart login button
        Then I verify calendar data
        Then I verify disabled date in calendar      

        