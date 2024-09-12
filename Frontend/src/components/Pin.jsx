// components/Pin.js
const Pin = ({ size = 40, text }) => (
  <div style={{ textAlign: "center" }}>
    <svg
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xml:space="preserve"
      fill="#ff0000"
      stroke="#ff0000"
      height={size}
      style={{ display: 'inline-block' }}
    >
      <path d="M16,3C10.5,3,6,7.5,6,13c0,8.4,9,15.5,9.4,15.8c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C17,28.5,26,21.4,26,13 C26,7.5,21.5,3,16,3z M16,17c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,17,16,17z"></path>
    </svg>
    <p style={{ marginTop: "5px", fontSize: "14px", color: "white" }}>{text}</p>
  </div>
);

export default Pin;
