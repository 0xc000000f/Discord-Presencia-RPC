// EL ID DE LA APLICACIÓN ES EL ID PARA ESTO. PARA OBTENERLO, VE AL PORTAL DE DESARROLLADORES DE DISCORD, CREA UNA NUEVA APLICACIÓN Y COPIA EL ID DE LA APLICACIÓN
const ID = 'ID_DE_LA_APLICACIÓN';

// COLOCA 'NPM INSTALL DISCORD-RPC' EN LA TERMINAL
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transporte: 'ipc' });

DiscordRPC.register(ID);

async function actividad() {
  if (!RPC) return;

  // DETALLES PARA LA PRESENCIA
  RPC.setActivity({
    detalles: ' DETALLES_DE_LA_RPC ',
    estado: ' ESTADO_DE_LA_RPC ',    
    largeImageKey: ' CLAVE_DE_IMAGEN_GRANDE ',
    largeImageText: ' TEXTO_ALTERNATIVO_IMAGEN_GRANDE ', 
    smallImageKey: ' CLAVE_DE_IMAGEN_PEQUEÑA ', 
    smallImageText: ' TEXTO_ALTERNATIVO_IMAGEN_PEQUEÑA ',
    instance: false, 
    startTimestamp: Date.now(), 
    // SOLO PUEDES TENER 2 BOTONES, APARECEN EN LA PARTE INFERIOR DE LA PRESENCIA ENRIQUECIDA
    buttons: [
      {
        label: ' TEXTO_DEL_BOTÓN ',  
        url: ' URL_DEL_BOTÓN '      
      },
      {
        label: ' TEXTO_DEL_BOTÓN ',
        url: ' URL_DEL_BOTÓN '
      }
    ]
  });
}

// NODE . EN LA TERMINAL PARA EJECUTAR EL CÓDIGO Y ACTIVAR LA PRESENCIA 
RPC.on('ready', async () => {
  console.log("Presencia en Discord activada");
  actividad();

  setInterval(() => {
    actividad();
  }, 100000000); // Actualiza la actividad cada 100 segundos (aproximadamente 1 día y 3 horas)
})

RPC.login({ clientId: ID });
