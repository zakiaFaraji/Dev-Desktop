/* eslint-disable jsx-a11y/anchor-is-valid */
import MyAvatar from "../assets/perso.png";

import "./floatingButton.css";

const FloatingButton = () => {
  return (
    <div className="infoButtonContainer">
      {/* <div className="presentation">
        {`to contact me or for more information ->`}
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
  </div>*/}

      <nav className="float-action-button">
        <a
          href="https://github.com/rodolphe37/my-simple-tasks-manager-/blob/main/README.md"
          target="new"
          className="buttons"
          title="Application Infos"
          data-toggle="tooltip"
          data-placement="left"
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 496.158 496.158"
            style={{ enableBackground: "new 0 0 496.158 496.158" }}
          >
            <path
              style={{ fill: "#25B7D3" }}
              d="M496.158,248.085c0-137.022-111.069-248.082-248.075-248.082C111.07,0.003,0,111.063,0,248.085
	c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.158,385.086,496.158,248.085z"
            />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M138.216,173.592c0-13.915,4.467-28.015,13.403-42.297c8.933-14.282,21.973-26.11,39.111-35.486
	c17.139-9.373,37.134-14.062,59.985-14.062c21.238,0,39.99,3.921,56.25,11.755c16.26,7.838,28.818,18.495,37.683,31.97
	c8.861,13.479,13.293,28.125,13.293,43.945c0,12.452-2.527,23.367-7.581,32.739c-5.054,9.376-11.062,17.469-18.018,24.279
	c-6.959,6.812-19.446,18.275-37.463,34.388c-4.981,4.542-8.975,8.535-11.975,11.976c-3.004,3.443-5.239,6.592-6.702,9.447
	c-1.466,2.857-2.603,5.713-3.406,8.57c-0.807,2.855-2.015,7.875-3.625,15.051c-2.784,15.236-11.501,22.852-26.147,22.852
	c-7.618,0-14.028-2.489-19.226-7.471c-5.201-4.979-7.8-12.377-7.8-22.192c0-12.305,1.902-22.962,5.713-31.97
	c3.808-9.01,8.861-16.92,15.161-23.73c6.296-6.812,14.794-14.904,25.488-24.28c9.373-8.202,16.15-14.392,20.325-18.567
	c4.175-4.175,7.69-8.823,10.547-13.953c2.856-5.126,4.285-10.691,4.285-16.699c0-11.718-4.36-21.605-13.074-29.663
	c-8.717-8.054-19.961-12.085-33.728-12.085c-16.116,0-27.981,4.065-35.596,12.195c-7.618,8.13-14.062,20.105-19.336,35.925
	c-4.981,16.555-14.43,24.829-28.345,24.829c-8.206,0-15.127-2.891-20.764-8.679C141.035,186.593,138.216,180.331,138.216,173.592z
	 M245.442,414.412c-8.937,0-16.737-2.895-23.401-8.68c-6.667-5.784-9.998-13.877-9.998-24.279c0-9.229,3.22-16.991,9.668-23.291
	c6.444-6.297,14.354-9.448,23.73-9.448c9.229,0,16.991,3.151,23.291,9.448c6.296,6.3,9.448,14.062,9.448,23.291
	c0,10.255-3.296,18.312-9.888,24.17C261.7,411.481,254.084,414.412,245.442,414.412z"
            />
          </svg>
        </a>
        <a
          href="https://my-github-pwa.netlify.app"
          target="new"
          className="buttons"
          title="My Github"
          data-toggle="tooltip"
          data-placement="left"
        >
          <svg
            height="38"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="38"
            data-view-component="true"
            className="octicon octicon-mark-github v-align-middle"
            style={{ background: "white", borderRadius: "50%" }}
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.rodolphe-augusto.fr/"
          target="new"
          className="buttons"
          title="My Portfolio"
          data-toggle="tooltip"
          data-placement="left"
        >
          <img
            src={MyAvatar}
            alt="avatar"
            style={{ width: 46, marginTop: -10 }}
          />
        </a>
        <a
          style={{ marginTop: 10 }}
          href="https://www.linkedin.com/in/rodolphe-augusto-auteur-d%C3%A9veloppeur-fullstack-react-node-1a20b759/"
          target="new"
          className="buttons"
          title="My Linkedin"
          data-toggle="tooltip"
          data-placement="left"
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 291.319 291.319"
            style={{ enableBackground: "new 0 0 291.319 291.319" }}
          >
            <g>
              <path
                style={{ fill: "#0E76A8" }}
                d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
		S65.21,0,145.659,0z"
              />
              <path
                style={{ fill: "#FFFFFF" }}
                d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
		c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
		s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
		c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"
              />
            </g>
          </svg>
        </a>
        <a
          href="#"
          className="buttons main-button"
          title="Infos & Contact"
          data-toggle="tooltip"
          data-placement="left"
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512" }}
          >
            <path
              style={{ fill: "#00C1FD" }}
              d="M256,512c-68.38,0-132.667-26.629-181.02-74.98C26.629,388.667,0,324.38,0,256
	S26.629,123.333,74.98,74.98C123.333,26.629,187.62,0,256,0s132.667,26.629,181.02,74.98C485.371,123.333,512,187.62,512,256
	s-26.629,132.667-74.98,181.02C388.667,485.371,324.38,512,256,512z"
            />
            <path
              style={{ fill: "#08A8EE" }}
              d="M437.02,74.98C388.667,26.629,324.38,0,256,0v512c68.38,0,132.667-26.629,181.02-74.98
	C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z"
            />
            <g>
              <polygon
                style={{ fill: "#E4F7FF" }}
                points="301,371 301,221 191,221 191,251 211,251 211,371 190,371 190,401 320,401 320,371 	"
              />
              <path
                style={{ fill: "#E4F7FF" }}
                d="M256,191c24.813,0,45-20.187,45-45s-20.187-45-45-45s-45,20.187-45,45S231.187,191,256,191z"
              />
            </g>
            <g>
              <path
                style={{ fill: "#CBEDFD" }}
                d="M256,191c24.813,0,45-20.187,45-45s-20.187-45-45-45V191z"
              />
              <polygon
                style={{ fill: "#CBEDFD" }}
                points="301,371 301,221 256,221 256,401 320,401 320,371 	"
              />
            </g>
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default FloatingButton;