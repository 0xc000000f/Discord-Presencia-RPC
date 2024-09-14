const DiscordRPC = require('discord-rpc');

const RPC = new DiscordRPC.Client({ transport: 'ipc' });

// ID de tu aplicación de Discord
const ID = 'ID_APP_DISCORD';

DiscordRPC.register(ID);

async function activity() {
  if (!RPC) return;

  // Detalles de la presencia
  RPC.setActivity({
    details: 'DETALLES_DE_LA_RPC',
    state: 'ESTADO_DE_LA_RPC',
    instance: false,
    startTimestamp: Date.now(),
    largeImageKey: 'CLAVE_DE_IMAGEN_GRANDE',
    largeImageText: 'TEXTO_ALTERNATIVO_IMAGEN_GRANDE',
    smallImageKey: 'CLAVE_DE_IMAGEN_PEQUEÑA',
    smallImageText: 'TEXTO_ALTERNATIVO_IMAGEN_PEQUEÑA',

    // Puedes tener hasta 2 botones
    buttons: [
      {
        label: 'TEXTO_DEL_BOTÓN',
        url: 'URL_DEL_BOTÓN'
      },
      {
        label: 'TEXTO_DEL_BOTÓN',
        url: 'URL_DEL_BOTÓN'
      }
    ]
  });
}

RPC.on('ready', async () => {
  activity();
  console.log("Presencia en Discord activada");
})

RPC.login({ clientId: ID });
