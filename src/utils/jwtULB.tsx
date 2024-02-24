const toBase64 = (obj: any) => {
  // converts the obj to a string
  const str = JSON.stringify(obj);
  // returns string converted to base64
  return Buffer.from(str).toString("base64");
};

const replaceSpecialChars = (b64string: string) => {
  // create a regex to match any of the characters =,+ or / and replace them with their // substitutes
  return b64string.replace(/[=+/]/g, (charToBeReplaced: string) => {
    switch (charToBeReplaced) {
      case "=":
        return "";
      case "+":
        return "-";
      case "/":
        return "_";
      default:
        return "";
    }
  });
};
import { createHmac } from "crypto";

const createSignature = (
  jwtB64Header: string,
  jwtB64Payload: string,
  secret: string
) => {
  // create a HMAC(hash based message authentication code) using sha256 hashing alg

  // of course we need to clean the base64 string of URL special characters
  const signature = replaceSpecialChars(
    createHmac("sha256", secret)
      .update(jwtB64Header + "." + jwtB64Payload)
      .digest("base64")
  );

  return signature;
};

export function setJWT(ulbid: string | undefined) {
  // suppose we have this header
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const b64Header = toBase64(header);
  const jwtB64Header = replaceSpecialChars(b64Header);
  //console.log ("the header is: ",jwtB64Header);

  const payload = {
    ulbid: process.env.NEXT_PUBLIC_JWT_ULBID,
    iat: Date.now(),
    exp: Date.now() + 3600,
  };

  // converts payload to base64
  const b64Payload = toBase64(payload);
  const jwtB64Payload = replaceSpecialChars(b64Payload);
  //console.log ("the payload is: ",jwtB64Payload);

  // create your secret to sign the token
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET || "";

  const signature = createSignature(jwtB64Header, jwtB64Payload, secret);
  //console.log ("the signature is: ",signature);

  const jsonWebToken = jwtB64Header + "." + jwtB64Payload + "." + signature;
  //console.log ("the JWT is :",jsonWebToken);

  return jsonWebToken;
}
