// import supertest and chai libaries
const httpClient = require('supertest');
const expect = require('chai').expect;

// define const values
const httpResponseCode = 200;
const baseUrl = 'https://api.tmsandbox.co.nz/v1/';
const query = `Categories/6327/Details.json?catalogue=false`;

// test methods
describe('category API tests', () => {
    beforeEach('Get and assert HTTP response', () => (
        httpResponse = httpClient(baseUrl)
            .get(query)
            .expect(httpResponseCode)
    ));
      
    it('Expect Name property value be Carbon credits when HTTP response code is 200', () => {
        // arrange
        var expectedValue = 'Carbon credits';

        // act and assert
        return httpResponse
            .then((response) => {
                expect(response.body.Name).to.equal(expectedValue);                
            })
    })

    it('Expect CanRelist property value be true when HTTP response code is 200', () => {
        // act and assert
        return httpResponse
            .then((response) => {
                expect(response.body.CanRelist).to.be.true;
            })
    })

    it('Expect Description property value be an expected value when Name of Promotion is Gallery and HTTP response code is 200', () => {
        // arrange
        var expectedValue = 'Good position in category';
        var expectedPromotionName = 'Gallery';

        // act and assert
        return httpResponse
            .then((response) => {
                var galleryPromotion = response.body.Promotions.find(promotion => promotion.Name === expectedPromotionName);
                expect(galleryPromotion.Description).to.equal(expectedValue);
            })
    })
});
