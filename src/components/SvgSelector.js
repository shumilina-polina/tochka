const SvgSelector = ({ svg }) => {
  switch (svg) {
    case "arrow":
      return (
        <svg width="13" height="19" viewBox="0 0 13 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7598 13.7169L12.4026 12.0407C11.9033 12.0956 10.5256 12.4446 9.00875 13.4009C8.163 13.9341 7.57411 14.9676 7.19158 15.9793L7.19158 0.546875L5.81514 0.546875L5.81514 15.9703C5.43252 14.9614 4.84462 13.9325 4.00141 13.4009C2.48456 12.4446 1.10684 12.0956 0.607583 12.0407L0.250389 13.7169C1.10686 13.6756 3.10009 13.9257 4.22124 15.2557C5.34239 16.5857 5.75091 18.0723 5.81503 18.6494L5.81514 18.6494L5.81514 18.651L7.19158 18.651L7.19158 18.6494L7.19512 18.6494C7.25924 18.0723 7.66776 16.5857 8.78891 15.2557C9.91006 13.9257 11.9033 13.6756 12.7598 13.7169Z"
            fill="black"
          />
        </svg>
      );
    case "tochka":
      return (
        <svg width="91" height="21" viewBox="0 0 91 21" fill="none">
          <path
            d="M61.2521 9.33792L66.61 2.20781C67.0276 1.65204 67.6798 1.32544 68.372 1.32544H72.2364L65.1243 10.5911L72.8609 19.8729H68.6421C67.9666 19.8729 67.3283 19.5618 66.9092 19.0285L61.2521 11.8283V17.6484C61.2521 18.877 60.2629 19.8729 59.0427 19.8729H56.873L56.907 1.32544H61.2521V9.33792Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M86.6386 18.2806C86.8971 19.1929 87.7312 19.8607 88.7203 19.8607H90.8769V1.32333H88.7584C87.7485 1.32333 86.8973 2.0076 86.6373 2.94077C84.9938 1.63133 82.9186 0.849609 80.6633 0.849609C75.3282 0.849609 71.0054 5.22121 71.0054 10.6112C71.0054 16.0012 75.3282 20.3728 80.6633 20.3728C82.9192 20.3728 84.9949 19.5907 86.6386 18.2806ZM80.6632 16.5024C83.88 16.5024 86.4898 13.866 86.4898 10.6112C86.4898 7.35637 83.88 4.71996 80.6632 4.71996C77.4465 4.71996 74.8366 7.35637 74.8366 10.6112C74.8366 13.866 77.4465 16.5024 80.6632 16.5024Z"
            fill="black"
          />
          <path
            d="M52.1773 19.8601C50.9571 19.8601 49.9679 18.8642 49.9679 17.6356V12.8926C49.8537 12.9945 49.7208 13.1013 49.5677 13.2078C48.8834 13.6838 47.8087 14.1439 46.2239 14.1439C44.3317 14.1439 42.4185 13.4884 40.9747 12.1848C39.5255 10.8763 38.5651 8.92862 38.5651 6.38357V1.32544H42.886V6.00249C42.886 7.40282 43.1827 8.44816 43.7297 9.138C44.2672 9.81581 45.0814 10.1942 46.2239 10.1942C47.4371 10.1942 48.3543 9.79695 48.9757 9.0388C49.6052 8.27086 49.9679 7.08815 49.9679 5.44819V1.32544H54.2888V19.8601H52.1773Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.7698 20.3728C33.1048 20.3728 37.4276 16.0012 37.4276 10.6112C37.4276 5.22121 33.1048 0.849609 27.7698 0.849609C22.4348 0.849609 18.112 5.22121 18.112 10.6112C18.112 16.0012 22.4348 20.3728 27.7698 20.3728ZM27.7698 16.5024C30.9865 16.5024 33.5964 13.866 33.5964 10.6112C33.5964 7.35637 30.9865 4.71996 27.7698 4.71996C24.553 4.71996 21.9432 7.35637 21.9432 10.6112C21.9432 13.866 24.553 16.5024 27.7698 16.5024Z"
            fill="black"
          />
          <path
            d="M7.47351 4.99797H2.7196C1.52179 4.99797 0.550781 4.02034 0.550781 2.81438V1.32544H18.6486V2.81438C18.6486 4.02035 17.6776 4.99797 16.4798 4.99797H11.7944V19.8601H7.47351V4.99797Z"
            fill="black"
          />
        </svg>
      );
    case "case1":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <g filter="url(#filter0_f_200_4230)">
            <circle
              cx="11.4288"
              cy="10.8546"
              r="7.50105"
              fill="url(#paint0_linear_200_4230)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4230"
              x="0.927732"
              y="0.353514"
              width="21.002"
              height="21.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1.5"
                result="effect1_foregroundBlur_200_4230"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4230"
              x1="5.6863"
              y1="6.60346"
              x2="15.4574"
              y2="17.2431"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F2EFF" />
              <stop offset="1" stopColor="#C373FA" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "case2":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <g filter="url(#filter0_f_200_4247)">
            <circle
              cx="10.9298"
              cy="10.5069"
              r="7.50105"
              fill="url(#paint0_linear_200_4247)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4247"
              x="0.428709"
              y="0.00585747"
              width="21.002"
              height="21.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1.5"
                result="effect1_foregroundBlur_200_4247"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4247"
              x1="5.18728"
              y1="6.2558"
              x2="14.9584"
              y2="16.8955"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBA58" />
              <stop offset="1" stopColor="#FF4A5C" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "case3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g filter="url(#filter0_f_200_4269)">
            <circle
              cx="10.6798"
              cy="11.0714"
              r="7.50105"
              fill="url(#paint0_linear_200_4269)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4269"
              x="0.178709"
              y="0.570311"
              width="21.002"
              height="21.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1.5"
                result="effect1_foregroundBlur_200_4269"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4269"
              x1="4.93728"
              y1="6.82025"
              x2="14.7084"
              y2="17.4599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBA58" />
              <stop offset="1" stopColor="#4AFFFF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "case4":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <g filter="url(#filter0_f_200_4345)">
            <circle
              cx="11.4288"
              cy="11.4132"
              r="7.50105"
              fill="url(#paint0_linear_200_4345)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4345"
              x="0.927732"
              y="0.912107"
              width="21.002"
              height="21.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1.5"
                result="effect1_foregroundBlur_200_4345"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4345"
              x1="5.6863"
              y1="7.16205"
              x2="15.4574"
              y2="17.8017"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E60FF" />
              <stop offset="1" stopColor="#FFFDE9" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "bar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g filter="url(#filter0_f_200_4305)">
            <circle
              cx="11.4317"
              cy="11.0069"
              r="7.50105"
              fill="url(#paint0_linear_200_4305)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4305"
              x="0.930662"
              y="0.505857"
              width="21.002"
              height="21.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1.5"
                result="effect1_foregroundBlur_200_4305"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4305"
              x1="5.68923"
              y1="6.7558"
              x2="15.4604"
              y2="17.3955"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E858FF" />
              <stop offset="1" stopColor="#FFED4A" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "parashut":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g filter="url(#filter0_f_200_4321)">
            <circle
              cx="10.6827"
              cy="10.7589"
              r="7.50105"
              fill="url(#paint0_linear_200_4321)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4321"
              x="0.181639"
              y="0.257811"
              width="21.002"
              height="21.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1.5"
                result="effect1_foregroundBlur_200_4321"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4321"
              x1="4.94021"
              y1="6.50775"
              x2="14.7113"
              y2="17.1474"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E858FF" />
              <stop offset="1" stopColor="#4AFFE9" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "format-1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
        >
          <g filter="url(#filter0_f_200_4455)">
            <circle
              cx="39.0004"
              cy="39.7211"
              r="21.0004"
              fill="url(#paint0_linear_200_4455)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4455"
              x="-1.33514e-05"
              y="0.72069"
              width="78.001"
              height="78"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="9.00001"
                result="effect1_foregroundBlur_200_4455"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4455"
              x1="22.9234"
              y1="27.8194"
              x2="50.2792"
              y2="57.6069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E858FF" />
              <stop offset="1" stopColor="#4AFFE9" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "format-2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
        >
          <g filter="url(#filter0_f_200_4460)">
            <circle
              cx="39.0004"
              cy="39.2211"
              r="21.0004"
              fill="url(#paint0_linear_200_4460)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4460"
              x="-1.33514e-05"
              y="0.22069"
              width="78.001"
              height="78"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="9.00001"
                result="effect1_foregroundBlur_200_4460"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4460"
              x1="22.9234"
              y1="27.3194"
              x2="50.2792"
              y2="57.1069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#66EA83" />
              <stop offset="0.640625" stopColor="#F3E13E" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "format-3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
        >
          <g filter="url(#filter0_f_200_4465)">
            <circle
              cx="39.0004"
              cy="39.723"
              r="21.0004"
              fill="url(#paint0_linear_200_4465)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4465"
              x="-1.33514e-05"
              y="0.722643"
              width="78.001"
              height="78"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="9.00001"
                result="effect1_foregroundBlur_200_4465"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4465"
              x1="22.9234"
              y1="27.8214"
              x2="50.2792"
              y2="57.6089"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E858FF" />
              <stop offset="1" stopColor="#FFED4A" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "format-4":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="79"
          viewBox="0 0 78 79"
          fill="none"
        >
          <g filter="url(#filter0_f_200_4470)">
            <circle
              cx="39.0004"
              cy="39.223"
              r="21.0004"
              fill="url(#paint0_linear_200_4470)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_200_4470"
              x="-1.33514e-05"
              y="0.222643"
              width="78.001"
              height="78"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="9.00001"
                result="effect1_foregroundBlur_200_4470"
              />
            </filter>
            <linearGradient
              id="paint0_linear_200_4470"
              x1="22.9234"
              y1="27.3214"
              x2="50.2792"
              y2="57.1089"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBA58" />
              <stop offset="1" stopColor="#4AFFFF" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return <></>;
  }
};

export default SvgSelector;
