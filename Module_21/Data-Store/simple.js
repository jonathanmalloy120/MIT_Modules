var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: []}).write();
 
console.log(db.get('posts').value());

// count posts
// ----------------------------
// YOUR CODE
console.log("LOOK AT ME THE LENGTH IS",db.get('posts').value().length)

// find all posts ids
// ----------------------------
// YOUR CODE
console.log("All of the post IDs: ",db.get('posts').value().map(obj => obj.id))

// all matches of published false
// ----------------------------
// YOUR CODE
let unpublished = db.get("posts").filter({ published: false }).value();
console.log("unpublished", unpublished);
//uses filter (rather tham map which was keeping the bad values as "false")

// find post with published false
// ----------------------------
// YOUR CODE
let unpublishedPost = db.get("posts").find({ published: false }).value();
console.log("unpublishedPost", unpublishedPost);
//uses find