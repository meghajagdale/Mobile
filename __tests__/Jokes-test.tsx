 import 'react-native';
 import React from 'react';
 import Jokes from '../src/Screen/Jokes';
 
 import renderer from 'react-test-renderer';
 

 
 describe('Auto Refill Manage Settings Screen', () => {
    
    it('Before calling api', () => {
        renderer.create(<Jokes />);
      });
      jest.useFakeTimers();
      it('After calling api', () => {
        renderer.create(<Jokes />);
      });

  });