// Código creado por⚔️ © Powered By[GATABOT-MD Y VÍCTOR BOT🇺🇾] 👑
// https://github.com/deylinqff
// No quites créditos

import PhoneNumber from 'awesome-phonenumber';

async function handler(m, { conn }) {
  m.react('👑');
  const numCreador = '59894243071';
  const ownerJid = numCreador + '@s.whatsapp.net';

  const name = await conn.getName(ownerJid) || 'Deylin';
  const about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || 'Sin descripción';
  const empresa = '⚔️ © Powered By[GATABOT-MD Y VÍCTOR BOT🇺🇾] 👑 - Servicios Tecnológicos';

  
  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa};
TITLE:CEO & Fundador
TEL;waid=${numCreador}:${new PhoneNumber('+' + numCreador).getNumber('international')}
EMAIL:correo@empresa.com
URL:https://www.tuempresa.com
NOTE:${about}
ADR:;;Dirección de tu empresa;;;;
X-ABADR:ES
X-ABLabel:Dirección Web
X-ABLabel:Correo Electrónico
X-ABLabel:Teléfono de contacto
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD
  `.trim();

  
  await conn.sendMessage(
    m.chat,
    { contacts: { displayName: name, contacts: [{ vcard }] } },
    { quoted: m }
  );
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'⚔️ © Powered By[GATABOT-MD Y VÍCTOR BOT🇺🇾] 👑];

export default handler;
⚔️ © Powered By[GATABOT-MD Y VÍCTOR BOT🇺🇾] 👑