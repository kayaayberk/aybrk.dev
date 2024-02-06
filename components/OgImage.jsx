export const OgImage = ({ title, description, url, image }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundImage: 'linear-gradient(to top right, #0D0D0D, #1a1a1a)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          top: 60,
          left: 60,
          fontSize: '2.5rem',
          lineHeight: 1,
          background: '#ffffff',
          color: '#0D0D0D',
          padding: '1rem 1.75rem',
          borderRadius: 15,
        }}
      >
        {`aybrk.dev${url ? `/${url}` : ''}`}
      </div>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          position: 'absolute',
          bottom: 60,
          left: 60,
          width: '80%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='65.000000pt'
            height='65.000000pt'
            viewBox='0 0 512.000000 512.000000'
            preserveAspectRatio='xMidYMid meet'
          >
            <g
              transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
              fill='#ffffff'
              stroke='none'
            >
              <path
                d='M899 5104 c-234 -42 -411 -135 -580 -303 -171 -172 -262 -348 -304
            -588 -22 -128 -22 -3178 0 -3306 42 -240 133 -416 304 -588 172 -171 348 -262
            588 -304 128 -22 3178 -22 3306 0 240 42 416 133 588 304 171 172 262 348 304
            588 22 128 22 3178 0 3306 -42 240 -133 416 -304 588 -172 171 -348 262 -588
            304 -122 21 -3196 21 -3314 -1z m2276 -2391 c336 -813 636 -1539 667 -1615
            l57 -138 -327 0 -328 0 -213 517 c-118 285 -270 656 -340 825 -69 169 -128
            308 -131 308 -3 0 -158 -372 -345 -825 l-340 -825 -327 0 -327 0 38 93 c21 50
            312 754 646 1562 335 809 618 1494 629 1522 12 29 23 53 26 53 3 0 280 -665
            615 -1477z'
              />
            </g>
          </svg>
          <span
            style={{
              fontSize: '5.25rem',
              lineHeight: 1,
              fontWeight: 600,
              color: 'white',
            }}
          >
            {title}
          </span>
        </div>
        {description && (
          <span
            style={{ fontSize: '2rem', lineHeight: '2.75rem', color: 'white' }}
          >
            {description}
          </span>
        )}
      </span>
    </div>
  );
};
