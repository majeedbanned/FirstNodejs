let sayhello = (hellomsg, callback) => {
	console.log(` the hello message is ${hellomsg}`);
	callback({ msg: 'tamam', num: 80 });
};

let afterrun = (eve) => {
    
	console.log(eve.msg);
	console.log(eve.num);
};
sayhello('salam', afterrun );
