import React from 'react'

function Devfoliobutton() {

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
    }, []);

  return (
    <div
        className="apply-button"
        data-hackathon-slug="swocs3"
        data-button-theme="light"
    ></div>
  )
}

export default Devfoliobutton