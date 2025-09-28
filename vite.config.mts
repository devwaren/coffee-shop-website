import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { TSFilebasedRouter } from '@devwareng/vanilla-ts'

export default defineConfig({
    plugins: [
        tailwindcss(),
        TSFilebasedRouter()
    ],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server: {
        headers: {
            "Content-Security-Policy": [
                "default-src 'self';",
                "script-src 'self';",
                "require-trusted-types-for 'script';",
                "trusted-types vanillaTSPolicy;"
            ].join(" ")
        }
    },
    build: {
        rollupOptions: {
            external: [
                'fs',
                'fs/promises',
                'os',
                'stream',
                'events',
                'node:path',
                'node:fs/promises',
                'node:stream',
                'path'
            ],
        },
    },
})
