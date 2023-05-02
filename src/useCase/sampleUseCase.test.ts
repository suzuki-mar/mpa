import { SampleUseCase } from './sampleUseCase';

describe('SampleUseCase', () => {
  it('test', () => {
    const sample = new SampleUseCase();    
    expect(sample.test()).toBe("test!");
  });
});