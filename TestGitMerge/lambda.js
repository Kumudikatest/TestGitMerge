let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_D10y3fy0o",
        AttributesToGet: ["sub", "name", "family_name", "nickname"],
        Filter: "Hiruuuu",
        Limit: 12221111111
    }, function (error, data) {
        if (error) {
            cosole.log(error);
            throw error;
        }
        else {
        }
    });


    callback(null, { "message": "S" });
}