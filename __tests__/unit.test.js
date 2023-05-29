// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//test function isPhoneNumber
test('good phone numbers',() => {
    expect(functions.isPhoneNumber(('(858) 648-2594'))).toBe(true);
    expect(functions.isPhoneNumber(('858-648-2594'))).toBe(true);
});
  
test('bad phone numbers',() => {
    expect(functions.isPhoneNumber(('858.648.2594'))).toBe(false);
    expect(functions.isPhoneNumber(('8586482594'))).toBe(false);
    expect(functions.isPhoneNumber(('(858) 6482-594'))).toBe(false);
    expect(functions.isPhoneNumber(('858-64-82594'))).toBe(false);
    expect(functions.isPhoneNumber(('(858) 6482594'))).toBe(false);
});
  

//test function isEmail
test('good emails',() => {
    expect(functions.isEmail('liuchangming1106@gmail.com')).toBe(true);
    expect(functions.isEmail(('chl135@ucsd.com'))).toBe(true);
});
  
test('bad emails',() => {
    expect(functions.isEmail(('chl135@gmail'))).toBe(false);
    expect(functions.isEmail(('chl@135'))).toBe(false);
    expect(functions.isEmail(('chl@135.'))).toBe(false);
    expect(functions.isEmail(('chl.135.com'))).toBe(false);
});

  
// test function isStrongPassword
test('Valid strong passwords should return true',() => {
    expect(functions.isStrongPassword(('chl135'))).toBe(true);
    expect(functions.isStrongPassword(('Wengthree1cm'))).toBe(true);
});
  
test('Invalid weak passwords should return false',() => {
    expect(functions.isStrongPassword(('w&&&&'))).toBe(false);
    expect(functions.isStrongPassword(('1wengthree'))).toBe(false);
    expect(functions.isStrongPassword(('1'))).toBe(false);
});
  

// test function isDate
test('good dates',() => {
    expect(functions.isDate(('1/1/2020'))).toBe(true);
    expect(functions.isDate(('11/6/2002'))).toBe(true);
    expect(functions.isDate(('11/06/2002'))).toBe(true);
});
  
test('bad dates',() => {
    expect(functions.isDate(('1/1/202'))).toBe(false);
    expect(functions.isDate(('011/06/2002'))).toBe(false);
    expect(functions.isDate(('11-06-2002'))).toBe(false);
});
  

// test function isHexColor
test('Valid hex colors should return true',() => {
    expect(functions.isHexColor(('#123abc'))).toBe(true);
    expect(functions.isHexColor(('#AAA'))).toBe(true);
    expect(functions.isHexColor(('#aa0000'))).toBe(true);
    expect(functions.isHexColor(('#Aa0000'))).toBe(true);
    expect(functions.isHexColor(('00aa00'))).toBe(true);
    expect(functions.isHexColor(('#111'))).toBe(true);
});
  
test('Invalid hex colors should return false',() => {
    expect(functions.isHexColor(('#12345g'))).toBe(false);
    expect(functions.isHexColor(('AAAA'))).toBe(false);
});

//
