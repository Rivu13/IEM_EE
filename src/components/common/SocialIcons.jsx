export function FacebookIcon({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.5 1.5-1.5H16.5V4.14C16.17 4.1 15.06 4 13.77 4 11.08 4 9.5 5.6 9.5 8.2v2.3H7v3h2.5V21h4Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...rest}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.98h4V21H3V9.98ZM10 9.98h3.84v1.52h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.66 4.77 6.12V21h-4v-4.6c0-1.1-.02-2.5-1.53-2.5-1.53 0-1.77 1.2-1.77 2.42V21h-4V9.98Z" />
    </svg>
  )
}

export function YoutubeIcon({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M22 8.2s-.2-1.6-.85-2.3c-.8-.9-1.7-.9-2.15-.95C15.9 4.7 12 4.7 12 4.7h-.02s-3.9 0-6.98.25c-.44.05-1.35.05-2.15.95C2.2 6.6 2 8.2 2 8.2S1.8 10.1 1.8 12v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.85 2.3c.8.9 1.86.87 2.33.97 1.68.16 7.12.25 7.12.25s3.9-.01 6.98-.26c.44-.05 1.35-.05 2.15-.95.65-.7.85-2.3.85-2.3s.2-1.9.2-3.8V12c0-1.9-.2-3.8-.2-3.8ZM9.9 15.5v-6l5.6 3-5.6 3Z" />
    </svg>
  )
}
