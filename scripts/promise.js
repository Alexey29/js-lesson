let promise = new Promise((resole, reject) => {
  setTimeout(() => {
    resole('success');
  }, 1000);

  reject(Error('error'));
});

promise.then((result) => {
  console.log(result);
}).catch((e)=> {
  console.log(e);
}).finally(() => {
  console.log('finally');
});

///////////////////////////////////////////////// Delay function

let delay = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

delay(2000).then(() => {
  console.log(1);
  return 2;
}).then((result) => {
  delay(2000).then(() => {
    console.log(result);
  })
});

/////////////////////////////////////////////////// for students

const fetchUser = () => new Promise((resolve, reject) => {
  const userStr = JSON.stringify({
    name: 'alex'
  });

  let user;

  setTimeout(() => {
    if (typeof userStr !== 'string') {
      resolve(TypeError('value mast be str'));
    }
  }, 1000);

  try {
    user = JSON.parse(userStr);
  } catch (e) {
    reject(e);
  }

  if (!user.name) {
    reject(Error('name is required'));
  }

  resolve(user);
});

fetchUser().then((result)=> {
  console.log(result)
});
