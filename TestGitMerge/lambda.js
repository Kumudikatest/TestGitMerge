let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_D10y3fy0o",
        Limit: 10
    }, function (error, data) {
        if (error) {
            cosole.log(error);
            throw error;
        }
        else {
            console.log(data);
        }
    });

    callback(null, { "message": "Success" });
}