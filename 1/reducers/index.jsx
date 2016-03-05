import _ from 'lodash'
export default function(state={
	msg:'请输入url',
	// json:{},
	url:"http://admin.willclass.com/api/Article/show?id=358",
	params:[["a","1"],["b","2"],["c","3"]],
	edit:{

	}
},action){

	switch(action.type){
		case "ShowJson":
			var newState=_.cloneDeep(state);
			newState.json=action.json;
			delete newState.msg;
			return newState;
		case "ChangeState":
		//修改编辑状况
			var newState=_.cloneDeep(state);
			_.merge(newState.edit, action.params);
			return newState;
		case "ChangeParams":
			//修改参数内容
			var newState=_.cloneDeep(state);
			var params=newState.params;
			var p=action.params;
			if(!params[p.row]){
				params[p.row]=['',''];
			}
			params[p.row][p.col]=p.value;
			return newState;
		case "ConsoleShow":
			var newState=_.cloneDeep(state);
			newState.response=action.response;
			return newState;	
		default:
			return state;
	}
	
}

function changeParamsKey(params,actionparams){
	var p={};
	//遍历原有内容,保证顺序
	for(var key in params){
		if(key===actionparams.key){
			p[actionparams.value]=params[key];
		}else{
			p[key]=params[key];
		}
	}
		//增加特例
	if(actionparams.key===''){
		p[actionparams.value]="";
	}

	return p;
}


