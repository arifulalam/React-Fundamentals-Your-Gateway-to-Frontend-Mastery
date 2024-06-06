/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import FunctionalComp from './components/FunctionalComp'
import ClassComp from './components/ClassComp'
import FunctionalComp2 from './components/FunctionalComp2'

function App() {
  const components = {
    'class': [
      'These is an ES6 class that extends React.Component.',
      'These not only allows dev to render a React element but also provides the ability to encapsulate state and behavior.',
      'They requires a render function responsible for returning the UI that should be rendered.',
      'They have in-build state management.',
      'They access to React lifecycle methods.',
      'They can directly interact with the browser\'s DOM using refs.',
      'They can act as error boundaries to catch JavaScript errors.',
    ],
    'function': [
      'These in React are simply JavaScript functions that return React elements.',
      'They accept props as an argument and return what should be rendered.',
      'Unlike class components, functional components do not have instances, making them lighter and often leading to less boilerplate code.',
      'As these are just a function, which makes them simpler to write and understand.',
      'Using React Hook, functional components can now manage state, side effects, and more.',
      'They can be slightly more efficient than class components.',
      'They are generally easier to test since they are just functions without side effects.',
      'They often result in less code, making codebase cleaner and easier to maintain.'
    ]
  };

  return (
    <>
      <div className='left'>
      <ClassComp title='Class Components' features={components.class}/>
      </div>
      <div className='right'>
      <FunctionalComp title='Functional Components' features={components.function}/>
      <FunctionalComp2/>
      </div>
    </>
  )
}

export default App
