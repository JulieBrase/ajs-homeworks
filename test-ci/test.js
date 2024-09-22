import { healthStatus } from './src/index';

test('health above 50 is healthy', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health between 50 and 15 is wounded', () => {
  expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('health below or equal to 15 is critical', () => {
  expect(healthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});
