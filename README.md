### Test Task Overview

This test task demonstrates the use of Storybook to test three components.
1. Components are located in `src/app/components/ComponentName`;
2. Stories are located in `src/stories/ComponentName`;

To launch:
1. Clone this repository;
2. Run `npm install`;
3. Run `npm run storybook`;

### Quick overview
Input field has 2 props:
1. `type` - sets type of the input field;
2. `clearable` - allows user to press "X" button to clear the input field;

Toast has 3 props:
1. `message` - display message of the Toast;
2. `duration` - duration before toast dissapears (in seconds);
3. `animation` - either `slide` or `fade`;

SidebarMenu has 3 props:
1. `hidden` - configures if sidebar is opened or closed on first render;
2. `openedIndex` - sets index of expanded header with links inside;
3. `items` - contains elements of sidebar, such as headers and links inside

I have used `motion dev` to control most of the animations of the application.

<img width="2877" height="1463" alt="Input" src="https://github.com/user-attachments/assets/6a8e553e-5175-4d03-a179-5901bbd2a3b5" />
Input field
<img width="2877" height="1463" alt="Password" src="https://github.com/user-attachments/assets/ebe51286-e4cf-417f-ad29-6b98ddc6da09" />
Password field
<img width="2877" height="1463" alt="VisibilityToggled" src="https://github.com/user-attachments/assets/bbd152a8-c7e3-489a-a72f-fb4a880fc044" />
VisibilityToggled
<img width="2877" height="1463" alt="ClearableVisibility" src="https://github.com/user-attachments/assets/70364ba9-715a-402f-aa84-9f43a42949e5" />
Clearable vsisiblitiy
<img width="2877" height="1463" alt="NavigationHidden" src="https://github.com/user-attachments/assets/45036dcc-067a-4af1-95e0-399eb5ade6c0" />
Hidden sidebar
<img width="2877" height="1463" alt="NavigationOpened" src="https://github.com/user-attachments/assets/36591a2b-15a4-4a5e-aa36-aa71f86cd448" />
Sidebar opened
<img width="2877" height="1463" alt="Toster" src="https://github.com/user-attachments/assets/05fdb369-3a8d-4e78-8a18-cea7979b36c0" />
Toster
<img width="2877" height="1463" alt="TosterFadeAnimation" src="https://github.com/user-attachments/assets/5102fa05-1cbf-45fb-8318-b3af533d84fc" />
Toster with fading navigation
