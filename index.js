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
    detalles: ' DETALLES_DE_LA_RPC ', // Lo que aparece en la línea superior de la presencia rica
    estado: ' ESTADO_DE_LA_RPC ',     // Texto adicional que aparece debajo de los detalles
    largeImageKey: ' CLAVE_DE_IMAGEN_GRANDE ',  // Nombre del archivo de la imagen grande (opcional)
    largeImageText: ' TEXTO_ALTERNATIVO_IMAGEN_GRANDE ',  // Texto que aparece al pasar el mouse sobre la imagen grande (opcional)
    smallImageKey: ' CLAVE_DE_IMAGEN_PEQUEÑA ',  // Nombre del archivo de la imagen pequeña (opcional)
    smallImageText: ' TEXTO_ALTERNATIVO_IMAGEN_PEQUEÑA ', // Texto que aparece al pasar el mouse sobre la imagen pequeña (opcional)
    instance: false,  // Indica si la aplicación está en modo multijugador (opcional)
    startTimestamp: Date.now(),  // Marca de tiempo de inicio de la actividad (opcional)
    // SOLO PUEDES TENER 2 BOTONES, APARECEN EN LA PARTE INFERIOR DE LA PRESENCIA ENRIQUECIDA
    buttons: [
      {
        label: ' TEXTO_DEL_BOTÓN ',  // Texto que aparece en el botón
        url: ' URL_DEL_BOTÓN '      // URL a la que se dirige al hacer clic en el botón
      },
      {
        label: ' TEXTO_DEL_BOTÓN ',
        url: ' URL_DEL_BOTÓN '
      }
    ]
  });
}

// NODEMANAGER. EN LA TERMINAL PARA EJECUTAR EL CÓDIGO Y ACTIVAR LA PRESENCIA 
RPC.on('ready', async () => {
  console.log("Presencia en Discord activada");
  actividad();

  setInterval(() => {
    actividad();
  }, 100000000); // Actualiza la actividad cada 100 segundos (aproximadamente 1 día y 3 horas)
})

RPC.login({ clientId: ID });
