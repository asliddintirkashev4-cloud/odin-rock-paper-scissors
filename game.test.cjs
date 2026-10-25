const test = require('node:test');
const assert = require('node:assert/strict');
const { getComputerChoice, getRoundResult } = require('./game.js');
test('all nine pairs follow the actual game rules', () => {
  const expected = [['draw','computer','human'],['human','draw','computer'],['computer','human','draw']];
  const choices = ['rock','paper','scissors'];
  choices.forEach((human,i) => choices.forEach((computer,j) => assert.equal(getRoundResult(human,computer),expected[i][j])));
});
test('normalises input and rejects an unknown choice', () => {
  assert.equal(getRoundResult(' ROCK ','Scissors'),'human');
  assert.throws(() => getRoundResult('lizard','rock'),RangeError);
});
test('random selection covers each third of the random range', () => {
  for (const [value,choice] of [[0,'rock'],[.333,'rock'],[1/3,'paper'],[.666,'paper'],[2/3,'scissors'],[.999999,'scissors']]) assert.equal(getComputerChoice(() => value),choice);
});
