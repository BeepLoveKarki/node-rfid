var spawn=require('child_process').spawn;
var python=()=>spawn('python',[__dirname+'/rc522/rfid-file.py']);
var readtime;

function callrfid(a,callback){
      var ls=python();
	  ls.stdin.write("rfid");
	  ls.stdin.end();
	  if(a==2)
		var timer=setTimeout(function(){
           ls.kill();
		   callback(null,"timeout");
        },readtime);
	  ls.stdout.on('data',function(data){
	    var b=data.toString();
		try{
		   b!="error";
		}catch(err){
		   ls.kill();
		   callback(new Error("Error"));
		}
		if(a=2) clearTimeout(timer);
		 callback(null,b);
	  });
}

var read=function(callback){
	  if(!arguments[0]) throw new Error("No any callback function provided");
	  callrfid(1,callback);
}

var readintime=function(time,callback){
	  if(!arguments[0]&& !arguments[1]) throw new Error("No any arguments provided");
	  if(arguments[0] && !arguments[1]) throw new Error ("No callback function provided");
	  if(typeof arguments[0]!='number') throw new Error("First argument of the function not type int");
	  readtime=time;
      callrfid(2,callback);
}

module.exports={
  read:read,
  readintime:readintime
}
