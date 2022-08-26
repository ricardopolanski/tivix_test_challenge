@addComputer
Feature: Rent a Car

    Feature Description

    Background:
        Given the website is accessed
        Then will be showed up five fields to be filled up
        And a blue Search button
        And a notice box warning "Please fill pickup and drop off dates"
        When all fields are filled up
        And the Search button is clicked
        
        

    Scenario: Search Car Filters
        Then will be displayed a table informing Company, Model, License plate, Price, Price per day and a Rent button 


    Scenario: Select a Car
        When the Rent button is clicked
        Then will be displayed a sumary with, Model, Company, Price per day, Location, Licencse plate, Pickup date and Dropoff date

    Scenario: Filling up Personal Information
        When the Rent button is clicked
        Then will be displayed a sumary with, Model, Company, Price per day, Location, Licencse plate, Pickup date and Dropoff date
        When fill up personal information
        When click on the Rent button
        Then all before information provided should be displayed