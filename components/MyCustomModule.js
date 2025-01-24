import {NativeModules} from 'react-native';

const {MyCustomModule} = NativeModules;

export default {
  greetUser: async name => {
    try {
      const greeting = await MyCustomModule.greetUser(name);
      return greeting;
    } catch (error) {
      console.error(error);
    }
  },
};
