'use strict'



jest.mock('fs');

const reader = require('../../lib/reader.js');


describe('File Reader Module', () => {

    describe('as a callback', () => {
  
      it('when given a bad file, returns an error', (done) => {
        
        let file = `${__dirname}/../../data/bad.txt`;
        reader.readerWithCallback(file, (err) => {
          expect(err).toBeDefined();
          done();
        });
      });
  
 
  
    });
  
    describe('as a promise', () => {
  
     
      it('when given a bad file, returns an error', () => {
        let file = `${__dirname}/../../data/bad.txt`;
        return reader.readerWithPromise(file)
          .then(data => expect(data).not.toBeDefined())
          .catch(error => expect(error).toBeDefined());
      });
  
      it('when given a real file, returns the contents', () => {
        let file = `${__dirname}/../../data/file1.txt`;
        return reader.readerWithPromise(file)
          .then(data => expect(data).toBeDefined())
          .catch(error => expect(error).not.toBeDefined());
      });
  
    });
  
    describe('as async/await', () => {
  
    
      it('when given a bad file, returns an error', async () => {
        let file = `${__dirname}/../../data/bad.txt`;
        try {
          let data = reader.readerWithPromise(file)
          expect(data).not.toBeDefined();
        }
        catch (error) { expect(error).toBeDefined(); }
      });
  
      it('when given a real file, returns the contents', () => {
        let file = `${__dirname}/../../data/file1.txt`;
        try {
          let data = reader.readerWithPromise(file)
          expect(data).toBeDefined();
        }
        catch (error) { expect(error).not.toBeDefined(); }
      });
  
    });
  
  });