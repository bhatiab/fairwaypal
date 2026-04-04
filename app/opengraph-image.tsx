import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#0c0d0b',
          color: '#f4efe4',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 22%, rgba(201,168,76,0.22), transparent 32%), radial-gradient(circle at 82% 18%, rgba(62,112,73,0.20), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.04), transparent 45%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '56px 64px',
            border: '1px solid rgba(255,255,255,0.08)',
            margin: '26px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'rgba(201,168,76,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
              }}
            >
              F
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 20, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a84c' }}>
                FairwayPal
              </div>
              <div style={{ fontSize: 16, color: 'rgba(244,239,228,0.65)' }}>
                Golf trips, minus the admin
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 820 }}>
            <div style={{ fontSize: 76, lineHeight: 1.02, fontStyle: 'italic', fontWeight: 400 }}>
              Golf trip sorted.
            </div>
            <div style={{ fontSize: 76, lineHeight: 1.02, fontStyle: 'italic', fontWeight: 400 }}>
              Partners happy.
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 28,
                lineHeight: 1.35,
                color: 'rgba(244,239,228,0.78)',
                maxWidth: 760,
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Shape the trip in five steps, then turn the group chat into one clearer plan.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 18, fontFamily: 'Arial, sans-serif' }}>
            {['5-step intake', 'Golf + partner planning', 'One shareable plan'].map((item) => (
              <div
                key={item}
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: 999,
                  padding: '12px 20px',
                  fontSize: 22,
                  color: '#f4efe4',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )
}