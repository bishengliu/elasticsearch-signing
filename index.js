// import { HttpRequest } from "@aws-sdk/protocol-http"
// import { defaultProvider } from "@aws-sdk/credential-provider-node"
// import { SignatureV4 }  from "@aws-sdk/signature-v4";
// import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
// import { Sha256 }  from "@aws-crypto/sha256-browser";
// import elasticsearch from 'elasticsearch';

var AWS = require('aws-sdk');

var region = 'eu-west-1'; 
var domain = 'https://elsastic-domain.amazonaws.com'; 
var index = 'test';
var type = '_doc';
var id = '1';
var json = {
    "title": "Moneyball",
    "director": "Bennett Miller",
    "year": "2011"
};



AWS.config.update({
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EnvironmentCredentials.html
    // https://github.com/aws/aws-sdk-js/issues/754
    // or new AWS.Credentials(ACCESKEY, SECRETKEY),
    // https://docs.aws.amazon.com/opensearch-service/latest/developerguide/request-signing.html6
    credentials: new AWS.EnvironmentCredentials('AWS'), 
    region: region
});

var client = require('elasticsearch').Client({
    host: domain,
    connectionClass: require('http-aws-es')
});

client.index({id : 1, type: type, index: index, body:json})