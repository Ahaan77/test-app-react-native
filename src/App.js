import logo from './logo.svg';
import './App.css';

function App() {

  const openNewFrame = false
  const triaStaging = false

  const containerStyles = {
    width: '416px',
    padding: '5px',
    paddingTop: '6px',
    paddingBottom: '6px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    display: 'inline-flex'
  };

  const innerDivStyles = {
    width: '95px',
    position: 'relative',
    backgroundColor: '#XXXXXX', // Replace XXXXXX with the appropriate color value for bg-stone-950
    borderRadius: '67.31px',
    boxShadow: '0px 0px 8px 2px rgba(100, 100, 100, 0.2)'
  };

  const imgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const absoluteDivStyles = {
    width: '14.66px',
    height: '14.66px',
    left: '40.17px',
    top: '40.17px',
    position: 'absolute',
    backgroundColor: '#XXXXXX', // Replace XXXXXX with the appropriate color value for bg-lime-400
    borderRadius: '50%',
    filter: 'blur(40.71px)'
  };

  const textStyles = {
    textAlign: 'center',
    color: 'white',
    opacity: '0.8',
    fontSize: '1.125rem', // Corresponding to text-lg in Tailwind
    fontWeight: '500', // Corresponding to font-medium in Tailwind
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: '1.6' // Adjust leading-snug in Tailwind accordingly
  };

  const flexContainerStyles = {
    width: '376px',
    paddingTop: '3px', // Adjusted padding as py-3 in Tailwind
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px', // Adjusted gap as gap-2 in Tailwind
    display: 'inline-flex'
  };

  const borderStyles = {
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: '0',
    border: '2px solid rgba(255, 255, 255, 0.1)', // Equivalent to border-2, border-white, border-opacity-10 in Tailwind
    borderRadius: '4px' // Assuming the same border radius as Tailwind's default
  };

  const textStyles2 = {
    color: 'rgba(255, 255, 255, 0.4)', // Equivalent to text-white, text-opacity-40 in Tailwind
    fontSize: '0.75rem', // Equivalent to text-xs in Tailwind
    fontWeight: '600', // Equivalent to font-semibold in Tailwind
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'uppercase',
    lineHeight: '1.44' // Adjusted leading-[14.40px] in Tailwind
  };

  return (

    <div
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        {openNewFrame === false ? (
          <div
            style={{
              width: '448px',
              borderRadius: '20px', // Equivalent to rounded-2xl in Tailwind
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', // Assuming similar shadow effects
              backgroundColor: '#101010', // Equivalent to bg-[#101010] in Tailwind
              height: '840px',
              padding: '16px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              display: 'inline-flex',
              transform: 'scale(0.7)',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            <div
              style={{ marginLeft: '-150px', position: 'absolute', top: 0 }}
            >
              {' '}
            </div>
            <div style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: '8px', // Assuming 2px gap in Tailwind is equal to 8px in inline style
              display: 'flex'
            }} >
              <div>
                <div style={{
                  width: '416px',
                  height: '39.50px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  display: 'inline-flex'
                }}
                ></div>
                <div style={containerStyles}>
                  <div style={innerDivStyles}>
                    <img src={""} alt="Logo" style={imgStyles} />
                    <div style={absoluteDivStyles}></div>
                  </div>
                  <div style={{ alignSelf: 'stretch', paddingTop: '12px', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'white', opacity: '0.8', fontSize: '1.125rem', fontWeight: '500', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6' }}>
                      Log in with Stack OS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-auto'>
              {/* <Logins /> */}
              <div
                style={{
                  width: '416px',
                  height: '375px',
                  padding: '4px 5px', // Adjusted padding as px-5 and py-4 in Tailwind
                  borderRadius: '20px', // Equivalent to rounded-2xl in Tailwind
                  border: '1px solid rgba(167,139,250,0.3)', // Equivalent to border-violet-400 and border-opacity-30 in Tailwind
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px', // Adjusted gap as gap-2 in Tailwind
                  display: 'inline-flex'
                }}
              >
                <div className=''>
                  <div className=''>
                    <div
                      style={{
                        overflow: 'hidden',
                        borderRadius: '19px',

                      }}
                    >
                      <iframe
                        style={{
                          marginTop: '-0.2px',
                          marginLeft: '-3px',
                        }}
                        src={
                          !triaStaging
                            ? `https://auth.tria.so/SocialLoginIframe/?dappName=${"dwhdjwh"}&dappLogo=${""}`
                            : `https://auth-tria.vercel.app/SocialLoginIframe/?dappName=${"jwdjwdj"}&dappLogo=${"bdjwbjdb"}`
                        }
                        height={'205px'}
                        width='100%'
                      />
                    </div>
                    <div style={flexContainerStyles}>
                      <div style={borderStyles}></div>
                      <div style={{ padding: '0px 2px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <div style={textStyles2}>
                          or
                        </div>
                      </div>
                      <div style={borderStyles}></div>
                    </div>
                    {/* <Wallets /> */}
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        ) : (
          <iframe
            width='314'
            height='586'
            src={""}
            allow='publickey-credentials-get'
          />
        )}
      </div>
    
  );
}

export default App;
