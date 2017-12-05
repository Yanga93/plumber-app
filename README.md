# Plumber Availability App - Innogy challenge

This application should allows a plumber to register their availability. A plumber must be able choose if they are available to work
on morning, midday or afternoon slots.

It should also allow users to book registered plumbers for a morning, midday or afternoon slots for a given week day. Is should return an appropriate massage to the users when there are no available plumbers for the time slot chosen. If the slot is available should display the plumber's name and contact details to the user who booked the slot.

### What the application is currently doing

You are able to register as a plumber and login back to the system with correct credentials others will return error message and the data is stored on mongoDB to remember the existing users.


### What the application is not working

Plumber is unable to select days available on and the times for day.

User is unable to book the plumber and receive the details of plumber.
User is able to see if the plumber is booked for certain slot if no the occupy the slot.



### Version
9.2.0

### Usage
As a plumber you should be able to create available times for bookings and update them.
And clients be able to see times a plumber is available on and book it.

### Installation

```sh
$ npm install
```

```sh
$ npm start
```
