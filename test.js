'use strict'

const test = require('tape')
const bm = require('.')

test('minimal manifest', function (t) {
  const input = { name: 'test' }
  const output = bm(input)

  t.same(input, { name: 'test' })
  t.ok(input !== output, 'new object identity')
  t.same(output, {
    name: 'test',
    wants: {},
    supports: {},
    options: {}
  })
  t.end()
})

test('normalized manifest', function (t) {
  const input = { name: 'test', wants: {}, supports: {}, options: {} }
  const output = bm(input)

  t.ok(input === output, 'kept object identity')
  t.end()
})

test('manifest must be an object', function (t) {
  t.throws(() => bm(), /TypeError: Manifest must be an object/)
  t.throws(() => bm(null), /TypeError: Manifest must be an object/)
  t.throws(() => bm([]), /TypeError: Manifest must be an object/)
  t.throws(() => bm(''), /TypeError: Manifest must be an object/)
  t.end()
})

test('name is required and must be a lowercase string', function (t) {
  t.throws(() => bm({}), /TypeError: The manifest.name property is required and must be a string/)
  t.throws(() => bm({ name: null }), /TypeError: The manifest.name property is required and must be a string/)
  t.throws(() => bm({ name: '' }), /TypeError: The manifest.name property is required and must be a string/)
  t.throws(() => bm({ name: {} }), /TypeError: The manifest.name property is required and must be a string/)
  t.throws(() => bm({ name: 'aA' }), /TypeError: The manifest.name property must be lowercase/)
  t.end()
})

test('version must be a string', function (t) {
  t.throws(() => bm({ name: 'a', version: 0 }), /TypeError: The optional manifest.version property must be a string/)
  t.throws(() => bm({ name: 'a', version: 30 }), /TypeError: The optional manifest.version property must be a string/)
  t.throws(() => bm({ name: 'a', version: '' }), /TypeError: The optional manifest.version property must be a string/)
  t.end()
})

test('title must be a string', function (t) {
  t.throws(() => bm({ name: 'a', title: 0 }), /TypeError: The optional manifest.title property must be a string/)
  t.throws(() => bm({ name: 'a', title: 30 }), /TypeError: The optional manifest.title property must be a string/)
  t.throws(() => bm({ name: 'a', title: '' }), /TypeError: The optional manifest.title property must be a string/)
  t.end()
})

test('provider must be a string', function (t) {
  t.throws(() => bm({ name: 'a', provider: 0 }), /TypeError: The optional manifest.provider property must be a string/)
  t.throws(() => bm({ name: 'a', provider: 30 }), /TypeError: The optional manifest.provider property must be a string/)
  t.throws(() => bm({ name: 'a', provider: '' }), /TypeError: The optional manifest.provider property must be a string/)
  t.end()
})

test('wants must be an object', function (t) {
  t.throws(() => bm({ name: 'a', wants: [] }), /TypeError: The optional manifest.wants property must be an object/)
  t.throws(() => bm({ name: 'a', wants: '' }), /TypeError: The optional manifest.wants property must be an object/)
  t.end()
})

test('supports must be an object', function (t) {
  t.throws(() => bm({ name: 'a', supports: [] }), /TypeError: The optional manifest.supports property must be an object/)
  t.throws(() => bm({ name: 'a', supports: '' }), /TypeError: The optional manifest.supports property must be an object/)
  t.end()
})

test('options must be an object', function (t) {
  t.throws(() => bm({ name: 'a', options: [] }), /TypeError: The optional manifest.options property must be an object/)
  t.throws(() => bm({ name: 'a', options: '' }), /TypeError: The optional manifest.options property must be an object/)
  t.end()
})
