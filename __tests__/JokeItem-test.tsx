import 'react-native';
import React from 'react';
import JokesItem from '../src/Components/JokeItem';

import renderer from 'react-test-renderer';

const Item = {
    joke:"This is jokes",
    id: '1'
}

describe('Auto Refill Manage Settings Screen', () => {
   
   it('Before calling api', () => {
       renderer.create(<JokesItem joke={Item} />);
     });
 });