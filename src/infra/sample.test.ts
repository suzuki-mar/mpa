import { Sample } from './sample';

describe('Sample', () => {
  describe('sample', () => {
    it('trueがかえること', () => {            
      const sample = new Sample();
      expect(sample.sample("hoge")).toBe(true)
    });
  })  

});