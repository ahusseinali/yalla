#Yalla App

##Installation (Android)
1. Follow instructions on [React-Native Install Link](https://facebook.github.io/react-native/docs/getting-started.html).
2. In Windows installation, create new Environment Variable **ANDROID_HOME**.
3. Make sure **ANDROID_HOME** points to the installed android-sdk path.
4. Add _%ANDROID_HOME%\tools_ and _%ANDROID_HOME%\platform-tools to **PATH** in Environment Variables.
5. In Cmd, navigate to repository.
6. Run `react-native run-android`.

## Common errors
1. React Native complains about not finding _android-x_ (where 'x' is some version number)
 _Solution: open Android Package Manager from Android Studio and install the required sdk version_

2. React Native complains about Build-tools version missing.
_Solution: run `android list sdk -a`, then locate the missing Build-tool required version and get its index in the list (will refer to it as {index}), then run `android update sdk -a -u -t {index}`_

3. React Native complains about no device connected
 _Solution: run `android avd` and manually create and run a new device emulator_
