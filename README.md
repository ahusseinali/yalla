#Yalla App

##Installation
First, follow instructions on [React-Native Install Link](https://facebook.github.io/react-native/docs/getting-started.html).

###Android
1. In Windows installation, create new Environment Variable **ANDROID_HOME**.
2. Make sure **ANDROID_HOME** points to the installed android-sdk path.
3. Add _%ANDROID_HOME%\tools_ and _%ANDROID_HOME%\platform-tools_ to **PATH** in Environment Variables.
4. In Cmd, navigate to repository.
5. Run `react-native run-android`.

###iOS (on a mac)
1. Navigate to the ios directory
2. Run `npm install`
3. Make sure you have Xcode installed
3. Open `YallaApp.xcodeproj` in Xcode and run using the simulator

## Common errors
1. React Native complains about not finding _android-x_ (where 'x' is some version number)<br />
 _Solution: open Android Package Manager from Android Studio and install the required sdk version_

2. React Native complains about Build-tools version missing<br />
_Solution: run `android list sdk -a`, then locate the missing Build-tool required version and get its index in the list (will refer to it as {index}), then run `android update sdk -a -u -t {index}`_

3. React Native complains about no device connected<br />
 _Solution: run `android avd` and manually create and run a new device emulator_
