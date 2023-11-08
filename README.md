## MEARN stack `App`:

Live link:

## Key functionalities:

It this project, has following functionalities:

- Display a list of available rooms
- Filter rooms by price range
- Filter rooms by country range
- Add a new room
- user can only book the room in available date. so, when a user click on date picker, a calendar will come out and then show booked duration dates in calendar and make those dates disable which is already selected by someone. when user click on date picker to select date and user can't select those duration.
- if a room is booked by someone on that particular date, that will be unavailable for others on that particular date
- Users can view a room summary of their booking before confirming. A modal will open and show an information list of user’s booking. Like: booking id, user’s name, room name, duration, total price. And there will be a confirmation button too. If user click on confirm, the room will be booked against that user and modal will be closed automatically.
- Users who are not logged in cannot book a room. If the user clicks the book button, they will be redirected to the login page.
- A dashboard for admin only. Admin can add rooms.
- Implemented toast notification
- Users can create an account with email and password.
- Users can log in using Google authentication via Firebase.
- JWT Authentication implemented.
