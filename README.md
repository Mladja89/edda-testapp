# Edda | Test App

Mobile test application built on React Native with [Expo](https://expo.dev/) and [NativeWind](https://www.nativewind.dev/). List the users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), search through the list of users and pull down to refresh the users list. Tapping on a View button will navigate you to the detailed information screen.

## How to run

1. Make sure you have node and npm installed on your machine. (node -v v18.12.1 | npm -v 9.3.0)
2. Make sure you have [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) installed by running 
```bash
npm install -g expo-cli
```
3. Clone the repository by running 
```bash
git clone https://github.com/Mladja89/edda-testapp.git
```
3. Navigate to the project directory by running 
```bash
cd edda-testapp
```
4. Install the dependencies by running 
```bash
npm install
```
5. Start the development server by running
```bash
npx expo start
```
6. Open the app on your emulator or on your device using the [Expo app](https://apps.apple.com/app/apple-store/id982107779) (make sure you're on the same network),
for debugging hit "J" in terminal to use [Hermes](https://hermesengine.dev/)
