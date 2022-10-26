'use strict';

const parseJWTTokenBrowser = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload =
    decodeURIComponent(atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(''));

  return JSON.parse(jsonPayload);
};

const parseJWTTokenNode = (token) => {
  const [header, payload] = token.split('.');
  return [header, payload].map((base64Data) => JSON.parse(Buffer.from(base64Data, 'base64').toString()));
}

console.log(parseJWTTokenNode("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjY3OTExMjUsImV4cCI6MTY2OTM4MzEyNSwicm9sZXMiOlt7fSx7fV0sImVtYWlsIjoib3Jlc3QuY2xpZW50QGdtYS5jb20ifQ.C2BAiufroj2klaWm5d-_QxPdGWvmli15lVgl_Sqr1vHY3we9pShnbuXLUrJyLHFBdNNSxmDOewZxsfnaFbp74v72cTmqS1bYZ0tuzgOBTUM6TEgu-dc8wweDjfgTfhZfx7eVFOqowIG3vzJ8FMzRjuUYauHv_j0d51bALaSjVfDInFMPAOf45kqdDOWnmKaeV0R_Tos4-MSDSKMqtCOWkJHK9EvKn5ATAuoqty5igjCIeqrcIR_aA2JmxJz8YZ5prtX0AvwnNa8GYjC3V64HLIOA_wNUpjxBNrvBy16CLAtIDPOjEdJ99soDKogEY_E-xMt_3lNtV-jKtpukw9wOMw"));