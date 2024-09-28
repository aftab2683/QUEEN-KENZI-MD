const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"cPf5HNedQT3+MpVC+FywQWrTGY2AYndCdT+JCztDW28="},"public":{"type":"Buffer","data":"XXj/Zzm0bjOu499p2YS1d/KrcnokZLqwH1F9VbC4SEE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cC8daz+SxXOfemp//4Xj2XgsEMzvdQISOEt+Whd/TXo="},"public":{"type":"Buffer","data":"fxEGOsZ7VGZBJnP9rKzQgb4ivWVmvgjyjwItf1N7KyE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QIsuEWuBDxHkDkh9Mspat5NVMlZihfVST0XzGxN5hHs="},"public":{"type":"Buffer","data":"+lU5h2Qk2g9h9zDIzdlZrq6CIcHuMbiyjF9DaU5C8FI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WAS1uptxy4HbGGHgfOBlUupUW8NMXwXkmnpZOFESO0E="},"public":{"type":"Buffer","data":"MRyWqXJ6YqVrNwGiEeC7ctlu0ATxer/PSBt9He5coBU="}},"signature":{"type":"Buffer","data":"U7lLshaKIi2Pa9utOBZO6afqMS8gJ8y/U07+Jqr+IdfRR2WtV9p8auPIygexMEak854rw0bQimHzsOUxuM4NjA=="},"keyId":1},"registrationId":17,"advSecretKey":"VmK/DfDq4041wFqTsoj0qpfjRsGqB4f9PdTRqmKSWPc=","processedHistoryMessages":[{"key":{"remoteJid":"923015326254@s.whatsapp.net","fromMe":true,"id":"5C91B78DD0665B136D24E857B309A7EB"},"messageTimestamp":1727554346}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"kSLzJokGS4qBLqBY_kOEqg","phoneId":"226aa59d-13fa-452d-88fd-cee7d6b362fd","identityId":{"type":"Buffer","data":"/3TlWLyV+0ZM9J67fk26rub3IXM="},"registered":true,"backupToken":{"type":"Buffer","data":"riqG+1WsYobyIdvw2dyCEXofj0w="},"registration":{},"pairingCode":"Z1QVXFFJ","me":{"id":"923015326254:62@s.whatsapp.net"},"account":{"details":"CJrLtOIFEJnG4bcGGAogACgA","accountSignatureKey":"Bq0MDXpaayVercHyCLn7P+Aj4RBHBZ/NqleelezP6g8=","accountSignature":"HTiWfUjrm4Goq5cW/pHkKmEhJ6VAeCNRXrMd8u7dWnDS8KarXDhxD5n/iLgiXeSswDK2HNOW73/tvgLWiuE+Bg==","deviceSignature":"ADox39jxcBD9svj7ltMsHgRdJBueIc/kOk8OJd/niOG4oNyssC6QwvDX/3cpJNHT6AVk7AVOEzO0joHByE1kiQ=="},"signalIdentities":[{"identifier":{"name":"923015326254:62@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQatDA16WmslXq3B8gi5+z/gI+EQRwWfzapXnpXsz+oP"}}],"platform":"android","lastAccountSyncTimestamp":1727554342,"myAppStateKeyId":"AAAAALqS"}",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/08ce20a843b7650a296e7.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©DΛЯK ПΣӨП ᑕYBΣЯZ ``| 2024🤍*",
AUTO_VOICE : process.env.AUTO_VOICE || "true",
READ_CMD: process.env.READ_CMD || "false",
MODE : process.env.MODE || "public",
AUTO_BIO : process.env.AUTO_BIO || "true",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
