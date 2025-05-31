import { IsUniqueMiddleware } from './is-unique.middleware';

describe('IsUniqueMiddleware', () => {
  it('should be defined', () => {
    expect(new IsUniqueMiddleware()).toBeDefined();
  });
});
