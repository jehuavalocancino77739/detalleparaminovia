# RegaloParaMiNovia

Una experiencia web premium, minimalista y emotiva creada con HTML, CSS y JavaScript puro.

## Estructura

```text
RegaloParaMiNovia/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   ├── audio/
│   ├── icons/
│   └── fonts/
└── README.md
```

## Cómo abrirla

Abre `index.html` directamente en Safari, Chrome o Edge. También puedes usar la extensión Live Server de VS Code para verla con recarga automática.

## Dónde personalizar

Todo lo editable está al inicio de `js/main.js`:

- `CONFIG.secretPassword`: contraseña del rincón secreto. Por defecto es `alexandra`.
- `CONFIG.secretLetter`: carta especial.
- `CONFIG.surpriseLetter`: carta de la notificación inesperada.
- `CONFIG.surpriseNotificationDelay`: tiempo antes de mostrar la notificación.
- `dailyMessages`: mensajes aleatorios del día.
- `letters`: cartas y textos.
- `songs`: canciones, artistas, motivos y enlaces.
- `songs[].audioSrc`: ruta del archivo de audio para el reproductor, por ejemplo `assets/audio/nuestra-cancion.mp3`.
- `specialDates`: fechas o recuerdos importantes.
- `photoMemories`: fotos fijas; guarda las imágenes en `assets/images/` y coloca la ruta en `src`.
- `littleThings`: tarjetas de cosas que admiras.
- `surprises`: mensajes sorpresa.
- `spiritualCorner`: versículos, reflexiones y el texto de "Mi mayor deseo".

## Música y fotos

El reproductor no inicia automáticamente. Para que una canción se reproduzca:

1. Copia un archivo `.mp3`, `.m4a` o compatible a `assets/audio/`.
2. En `js/main.js`, busca `songs` y completa `audioSrc`.

Ejemplo:

```js
audioSrc: "assets/audio/nuestra-cancion.mp3"
```

Las fotos subidas con el botón de la página solo se previsualizan en esa visita. Para dejarlas permanentes, guárdalas en `assets/images/` y edita `photoMemories`.

## Notas

- No reproduce música automáticamente.
- No usa frameworks ni dependencias de JavaScript.
- Está pensada para funcionar bien en iPhone, Chrome, Edge y Safari.
