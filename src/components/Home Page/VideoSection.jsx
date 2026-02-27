import video from '../../assets/Liberty-Security (1).mp4'

export default function VideoSection() {
  return (
    <section style={{ backgroundColor: '#0a201d', padding: '80px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>

        {/* Label */}
        <p style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
          Who We Are
        </p>

        {/* Heading */}
        <h2 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: '900', marginBottom: '16px', lineHeight: '1.1' }}>
          Discover Our{' '}
          <span style={{ color: '#2dd4bf' }}>Security Expertise</span>
        </h2>

        {/* Subtext */}
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.7' }}>
          Learn how our experienced team can provide unparalleled protection and peace of mind for your business or personal needs.
        </p>

        {/* Video Container */}
        <div style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '2px solid rgba(45, 212, 191, 0.3)',
          boxShadow: '0 0 60px rgba(45, 212, 191, 0.15)',
        }}>
          <video
            controls
            style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* CTA */}
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '24px' }}>
          Reach out today for a{' '}
          <span style={{ color: '#2dd4bf', fontWeight: '600' }}>no-obligation quote</span>
          .
        </p>

      </div>
    </section>
  )
}
