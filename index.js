module.exports={
    name:"nexmo", 
    "trigger":{}, 
    "actions":[
        {
            name:"send", 
            fields:[
                { name:"api_key", displayName:"Key"},
                { name:"api_secret", displayName:"Secret"},
                { name:"text", displayName:"Body"},
                { name:"to", displayName:"Number"},
                { name:"from", displayName:"From"},
            ],
            delegate:function(fields){
                var result=function(fields){
                    $.ajax({type:'get', contentType:'application/json', dataType:'json', data:fields, url:"https://rest.nexmo.com/sms/json", success:function(result){
                        console.log(result);
                    },error:function(){
                        console.log(arguments[0]);
                    }});
                };
                result.fields=fields;
                return result;
            }
        }
    ]
};