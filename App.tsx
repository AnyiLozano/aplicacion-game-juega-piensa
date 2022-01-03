/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   Link,
   Text,
   HStack,
   Center,
   Heading,
   Switch,
   useColorMode,
   NativeBaseProvider,
   VStack,
   Code,
   Button,
 } from 'native-base';
 import NativeBaseIcon from './src/components/NativeBaseIcon';
 import useComponents from './src/components';
 import { useForm } from 'react-hook-form';
 import Routes from './src/routes';
 
 const App = () => {
   return (
       <Routes/>
   );
 };
 export default App;
 