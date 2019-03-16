"use strict";
/*requiring mongodb node modules */
const  mongodb=require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const assert = require('assert');
const MongoUrl='mongodb://venki519:venki519@ds161285.mlab.com:61285/chatserver';

module.exports.onConnect = (callback) => {	

	MongoClient.connect(MongoUrl, (err, db) => {
		assert.equal(null, err);
		callback(db,ObjectID);
	});
	
}
