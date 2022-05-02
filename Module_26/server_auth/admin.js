const admin = require('firebase-admin');

//private key stuff
const type = "service_account";
const project_id = "firsttest-a8f11";
const private_key_id = "e3f4fb236b0c1ef7cc9ffba74100263f8b0b0707";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD2JrmSQgiNDxTe\nQz07QPj9f81KzrEI5Xkak/4GhJ/oBnrv8fNt36ryiie5zHiE3gSPJ4+BRgdjITlc\ndEmjK1wDzjpjjkyDVltDeRbNzRDvWusvYT1IUsEoGmVFXOikz96lS9sezMQ1g9R/\n2fHWaQbq69rj0tlZdOMC0vOtagdAXa+jQCTlAyIusHDabc2R0wfo0cq0TsqjQUu8\nzOhB9Ylbf8vDG2DDFC+L5aDG73A3XPP7Kr1hJwaK5z0SF5q1VKSdTlisbTTQw8uV\nwkGp2YRPZ4MkDigbsozywZAGe7qI3Tt79QISex5tFbMRIHMUM8zFpnZz/zDegjGe\nmXCPHLH7AgMBAAECggEAbYHk5PCDpV2kRw1a3FWXcA+/YRx7Hh4Ytn5IcNXn3e2k\nG8NkLOlov+Y+riYNJ+8t0BIlgbmJ58wMHNmPOQw9L2Q8DbZsy7FLgMUKJByrABFO\nuBFmlhpa3GCB1U30If5oatlIbndigvxXOVnYgS7QaQrsopZXI7kglU0MI4YcG8Gy\n0hrGBQ6edzafznrElBPMxoyzKyY6xHQy+yiln3EwCdRz2M5BWAD5paF6MhzURVwi\n5SrLuRfU+MHydoBfSb58yr6FWShW07HmWPIb7SKwewaTfA+h4FNwcws+2xNPGhTx\n4K6n72H4cS+0Ku4WSr0GhCO29A0U5U1xKRT3DGVYwQKBgQD/W4ngDKLfDHH6yy5y\nxAcgRN/tUNLHSBo5axLsIxeoS0iMXDGgCX8qWEvjQapfkQmbQPlkKdoE7Q8aTk0g\nHYBys3CnQwfpNKe9lb+sxECl1RS9iJPQN1DuK713AZBjkjjby+SHBNV1+sQyMdtN\njccy5YzEcfgjjiRm3rUJqcTxmQKBgQD2xUHOIuXnRnHROZ3N8SkTEKHy0GI3l9n8\nKcv1zEWG6lDEJmBowtV0IJKKvRYWNvyzJ0zXO43tfKEAhHos9MeZZ9FCXFDR1/M5\nxX5pflE1CXyLWlXeyzkMVZyUB3bSphu3ehz6fbPrOELqh4Raug8Gz9HPTR3oYWE2\nVuVHYUhkswKBgQCiPOBeTujz2Y5ZDtoV5GG6qMe0mVMxdafjrxm4mZsgO6R+ONz2\nltIKb0rXuhKq4RU/ZIqOjuCLnKmpxvHNY7EGLud1/Wp7Sg8ArrG27IE+WyDwQmPX\nOC3dBEE96Op5uJ8TVnl9Jx8P9CDO20o//cH/nkRPUzGaNWb/TKOs3gXYkQKBgQDB\nyMvRXdRe1xIANJe4pt4Ti6cxr/TBJW1YOVZi0qPyu8TrFBv3iLDo/b82ViCnF01A\nPud3ydu9mHYymtX6wcqQrFdHHomVEFl/j5iirUCGPsngAPOX/szw47YPBQGJkEoJ\nvkpNZzNHzym1VPBZ8uxj9AUWHsASwY3+hySL9lhMQwKBgQDXBlkLhY66vQZuwpHH\nQEDHdD0J2w8+j5j5K2VWZiZ2P5z7qjCVmeAMbA8vof8XrMP+mhvOYZj5mbR8Dbwf\nuJp+aB2oeyC76LzbV9aClXXJULZ0YDg/xesICXqIfoisjT8bkhA1kFIaGAZ1rhyN\nbySuuMOezk0DiOddUSgIWxOs1A==\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-dyaey@firsttest-a8f11.iam.gserviceaccount.com";
const client_id = "110180081488941120479";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dyaey%40firsttest-a8f11.iam.gserviceaccount.com";

//credential grants access to firebase service
admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
            private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
});

module.exports = admin;
