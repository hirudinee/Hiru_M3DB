let AWS = require('aws-sdk');
const s3 = new AWS.S3();
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'ThuvvaTable',
		Key: {}
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
		s3.putObject({
			"Body": "ada",
			"Bucket": "hiru.new",
			"Key": "sdaa"
		})
			.promise()
			.then(data => {
				console.log(data);           // successful response
				/*
				data = {
					ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
					VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
				}
				*/
			})
			.catch(err => {
				console.log(err, err.stack); // an error occurred
			});
	});

	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/test partner',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});




	callback(null, 'Successfully executed');
}