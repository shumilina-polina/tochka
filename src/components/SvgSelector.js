const SvgSelector = ({ svg }) => {
  switch (svg) {
    case "close":
      return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path
            d="M5.31274 4.7998L19.7127 19.1998M19.7127 4.7998L5.31274 19.1998"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="1.41176"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    default:
      return <></>;
  }
};

export default SvgSelector;
