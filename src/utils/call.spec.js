'use strict';

describe('call', function () {
    var url;

    it('should succeed on valid url', function (done) {
        var targets = [
            { url: 'https://www.lavanguardia.com/', text: 'vanguardia' },
            { url: 'https://www.eldiario.es/', text: 'eldiario' },
            { url: 'https://www.elmundo.es/', text: 'mundo' },
            { url: 'https://www.expansion.com/', text: 'expansion' },
            { url: 'https://www.abc.es/', text: 'abc' }
        ];

        var target = targets[Math.floor(Math.random()*targets.length)];

        call("https://skylabcoders.herokuapp.com/proxy?url=" + target.url, undefined, function(error, response) {
            expect(response.status).to.equal(200);
            expect(response.content.toLowerCase()).to.contain(target.text);

            done();
        });
    });

    it("should fail when is an invalid url", function(done) {
        var url = "https://www.kjxnlkdjsfnglksdjfng.com";

        call(url, undefined, function(error, response) {
            expect(response).to.be.undefined;
            expect(error).to.exist;
            expect(error).to.be.instanceof(Error);
            expect(error.message).to.equal("Network error");
            
            done();
        });  
    })

    it("should fail on valid non-string url", function() {
        url = 123;
        expect(function(){
            call(url)
        }).to.throw(TypeError, url + " is not a string");

        url = {};
        expect(function(){
            call(url)
        }).to.throw(TypeError, url + " is not a string");

        url = [];
        expect(function(){
            call(url)
        }).to.throw(TypeError, url + " is not a string");

        url = function(){};
        expect(function(){
            call(url)
        }).to.throw(TypeError, url + " is not a string");
    });
});