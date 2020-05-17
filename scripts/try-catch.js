try {
  // do something
} catch (e) {
  //catch errors
} finally {
  //do after action
}

/////////////////////////////////////////////////// cond after error

try {
  console.log('script before error');

  notDefinedValue;

  console.log('script after error');
} catch (e) {
  console.log('error name: ', e.name);
  console.log('error message: ', e.message);
} finally {
  console.log('finaly');
}

////////////////////////////////////////////////// setTimeOut

try {
  console.log('script before error');
  setTimeout(() => {
    notDefinedValue;
  }, 1000);

  console.log('script after error');
} catch (e) {
  console.log('error name: ', e.name);
  console.log('error message: ', e.message);
} finally {
  console.log('finally');
}

///////////////////////////////////////////////////   throw

try {
  throw Error('error');
  throw TypeError('value mast be type number');
  throw RangeError('max value is 5');
} catch (e) {
  if (e instanceof Error) {
    console.log('Error: ',e);
  } else {
    throw e;
  }
}

///////////////////////////////////////////////// finally in functions

try {
  console.log('start loader');
} catch (e) {

}

console.log('stop loader');

const doSomething = () => {
  try {
    console.log('start loader');
    return 1;
  } catch (e) {
    console.log(e);
  } finally {
    console.log('stop loader');
  }

};

doSomething();

///////////////////////////////////////////////// for students

const userStr = JSON.stringify({
  name: 'alex',
  age: 11
});

const getUserByJsonString = (jsonStr) => {
  if (typeof jsonStr !== 'string') {
    throw TypeError('value mast be str');
  }

  const user = JSON.parse(jsonStr);

  if (!user.name) {
    throw Error('name is required');
  }

  return user;
};

try {
  getUserByJsonString(userStr);
} catch (e) {
  console.log(e);
}
