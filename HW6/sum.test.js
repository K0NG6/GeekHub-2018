"use strict";

let string_array = ['one','two','three' ],
string = 'string'

test('String', () => {
    expect(string_array.length).toEqual(3);
    expect(string_array[0]).toEqual('one');
    expect(String.fromCodePoint(65, 65, 65)).toEqual('AAA');
    expect(string.indexOf('ri')!==-1).toEqual(true);
    expect(string.indexOf('li')!==-1).toEqual(false);
    expect(string.slice(1)).toEqual('tring');
    expect(string.slice(1,3)).toEqual('tr');
    expect(string.replace('st','ft')).toEqual('ftring');
    expect(string.split('r')).toEqual( ['st', 'ing']);
    expect(string_array.join('<')).toEqual( 'one<two<three');
});

let number =123;
test('Numbers', () => {
    expect(5).toEqual(5);
    expect((123).toString()).toEqual('123');
    expect(Math.pow(2, 3)).toEqual(8);
    expect( 2 + "5" ).toEqual( "25" );
    expect(Number.isFinite(number) ).toEqual( true );
    expect(Number.isFinite('123') ).toEqual( false );
    expect(Number.isInteger(number) ).toEqual( true );
});
test('test_arrays', () => {
    string_array.push('four');
    expect(string_array.length).toEqual(4);
    string_array.pop();
    string_array.shift();
    expect(string_array[0]).toEqual("two");
    string_array.unshift('one');
    expect(string_array[0]).toEqual("one");
});
test('test_operators', () => {
    expect( 2 != 5 ).toEqual(true);
    expect( 2 < 5  ).toEqual(true);
    expect( 5 < 2 ).toEqual( false );
    expect( false < true  ).toEqual( true );
    expect( false < 1 ).toEqual( true );
});
test('test_algorithm', () => {
    expect(null != 0).toEqual(true);
    expect(false+true).toEqual(1);
    expect(10 /"2").toEqual(5);
    expect('true' == true).toEqual(false);
    expect('false' === false ).toEqual(false);
    expect(5 == '5' ).toEqual(true);
    expect(5 === '5' ).toEqual(false);
});