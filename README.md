# Presencia rpc

Este es un sencillo script en js para configurar una rpc personalizada en Discord utilizando la biblioteca `discord-rpc`.

![Discord-Presencia-RPC](./images/rpc)


## Requisitos

- [Node.js](https://nodejs.org/) (versión 12.0.0 o superior)
- [Discord Developer Portal](https://discord.com/developers/applications) para crear una aplicación de Discord

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Yukisuhii/Discord-Prensencia-RPC.git
   cd Discord-Presencia-RPC
   ```

2. Instala las dependencias del proyecto ejecutando el siguiente comando en la terminal:

   ```bash
   npm install discord-rpc
   ```

3. Ve al [Portal de desarrolladores de Discord](https://discord.com/developers/applications), crea una nueva aplicación y copia el **ID de la aplicación**.

4. Reemplaza el valor `'ID_DE_LA_APLICACIÓN'` en el archivo del script con el ID de tu aplicación de Discord.

## Configuración de la presencia

En el archivo del script, puedes personalizar los detalles de la rpc modificando las siguientes propiedades:

- `detalles`: Texto que aparecerá en la parte superior de la presencia.
- `estado`: Texto adicional que aparece debajo de los detalles.
- `largeImageKey`: Nombre del archivo de la imagen grande que has subido a Discord (opcional).
- `largeImageText`: Texto que aparece al pasar el mouse sobre la imagen grande (opcional).
- `smallImageKey`: Nombre del archivo de la imagen pequeña (opcional).
- `smallImageText`: Texto que aparece al pasar el mouse sobre la imagen pequeña (opcional).
- `buttons`: Añade hasta dos botones personalizados, cada uno con su `label` (texto) y `url` (enlace).

## Uso

Para iniciar ejecuta el siguiente comando en la terminal:

```bash
node index.js
```

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de hacer un fork de este repositorio

## Licencia

Este proyecto está licenciado bajo la licencia Apache 2.0, Puedes ver más detalles en el archivo `LICENSE`.
```
