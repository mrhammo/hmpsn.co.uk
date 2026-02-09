export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          HMPSN
        </h1>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/mrhammo"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer noopener"
            className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.596 2 12.253c0 4.52 2.865 8.35 6.839 9.708.5.095.682-.223.682-.495 0-.245-.009-.892-.014-1.75-2.782.622-3.369-1.374-3.369-1.374-.454-1.18-1.11-1.494-1.11-1.494-.907-.64.069-.627.069-.627 1.002.072 1.53 1.056 1.53 1.056.89 1.562 2.336 1.111 2.905.85.091-.67.349-1.111.635-1.367-2.22-.26-4.555-1.14-4.555-5.073 0-1.12.39-2.033 1.029-2.75-.103-.26-.446-1.308.098-2.726 0 0 .84-.275 2.75 1.05A9.26 9.26 0 0 1 12 6.844c.851.004 1.707.118 2.506.345 1.909-1.325 2.748-1.05 2.748-1.05.545 1.418.202 2.466.1 2.726.64.717 1.028 1.63 1.028 2.75 0 3.944-2.338 4.81-4.566 5.066.359.317.679.94.679 1.894 0 1.367-.012 2.47-.012 2.807 0 .274.18.593.688.492C19.137 20.598 22 16.771 22 12.253 22 6.596 17.523 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/thomas-hampson"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
            className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.28 2.3-2.63 4.74-2.63 5.07 0 6 3.36 6 7.72V24h-5v-6.91c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V24h-5z" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
