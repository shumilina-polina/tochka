const SvgSelector = ({ style = {}, svg }) => {
  switch (svg) {
    case "arrow":
      return (
        <svg width="13" height="19" viewBox="0 0 13 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7598 13.7169L12.4026 12.0407C11.9033 12.0956 10.5256 12.4446 9.00875 13.4009C8.163 13.9341 7.57411 14.9676 7.19158 15.9793L7.19158 0.546875L5.81514 0.546875L5.81514 15.9703C5.43252 14.9614 4.84462 13.9325 4.00141 13.4009C2.48456 12.4446 1.10684 12.0956 0.607583 12.0407L0.250389 13.7169C1.10686 13.6756 3.10009 13.9257 4.22124 15.2557C5.34239 16.5857 5.75091 18.0723 5.81503 18.6494L5.81514 18.6494L5.81514 18.651L7.19158 18.651L7.19158 18.6494L7.19512 18.6494C7.25924 18.0723 7.66776 16.5857 8.78891 15.2557C9.91006 13.9257 11.9033 13.6756 12.7598 13.7169Z"
            fill="#222"
          />
        </svg>
      );
    case "arrow_events":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <circle
            cx="14"
            cy="14"
            r="13.6951"
            stroke="black"
            stroke-width="0.609877"
          />
          <path
            d="M13.3898 8.39583C13.8586 8.91199 15.1487 9.91346 16.558 9.79347C17.9674 9.67339 19.0578 9.054 19.4265 8.75905L19.742 9.07463L19.7393 9.07739L20.2164 9.55455C19.9214 9.92356 19.3021 11.0128 19.182 12.4216C19.0619 13.8309 20.0634 15.1209 20.5797 15.5898L19.4106 16.3487C19.1551 16.0301 18.5638 15.0368 18.2415 13.6149C18.0622 12.8239 18.3161 11.8935 18.6765 11.0931L9.80594 19.9637L9.01459 19.1723L17.89 10.2969C17.0889 10.6581 16.1568 10.9135 15.3647 10.734C13.943 10.4116 12.9502 9.81966 12.6316 9.56422L13.3898 8.39583Z"
            fill="#222222"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg width="13" height="19" viewBox="0 0 13 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7598 13.7169L12.4026 12.0407C11.9033 12.0956 10.5256 12.4446 9.00875 13.4009C8.163 13.9341 7.57411 14.9676 7.19158 15.9793L7.19158 0.546875L5.81514 0.546875L5.81514 15.9703C5.43252 14.9614 4.84462 13.9325 4.00141 13.4009C2.48456 12.4446 1.10684 12.0956 0.607583 12.0407L0.250389 13.7169C1.10686 13.6756 3.10009 13.9257 4.22124 15.2557C5.34239 16.5857 5.75091 18.0723 5.81503 18.6494L5.81514 18.6494L5.81514 18.651L7.19158 18.651L7.19158 18.6494L7.19512 18.6494C7.25924 18.0723 7.66776 16.5857 8.78891 15.2557C9.91006 13.9257 11.9033 13.6756 12.7598 13.7169Z"
            fill="#222"
          />
        </svg>
      );
    case "tochka":
      return (
        <svg
          width="75"
          height="16"
          viewBox="0 0 75 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.7471 6.9565L54.1381 1.1131C54.4804 0.657623 55.0149 0.389963 55.5821 0.389963H58.7492L52.9205 7.98355L59.261 15.5903H55.8035C55.2499 15.5903 54.7268 15.3354 54.3834 14.8983L49.7471 8.99743V13.7673C49.7471 14.7741 48.9364 15.5903 47.9364 15.5903H46.1583L46.1861 0.389963H49.7471V6.9565Z"
            fill="#2A2929"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.5523 14.2854C70.7642 15.033 71.4478 15.5804 72.2584 15.5804H74.0258V0.388232H72.2896C71.4619 0.388232 70.7644 0.949021 70.5513 1.71378C69.2044 0.640652 67.5037 0 65.6553 0C61.2831 0 57.7404 3.5827 57.7404 8C57.7404 12.4173 61.2831 16 65.6553 16C67.5041 16 69.2052 15.359 70.5523 14.2854ZM65.6553 12.8281C68.2915 12.8281 70.4304 10.6674 70.4304 7.99999C70.4304 5.33254 68.2915 3.17191 65.6553 3.17191C63.019 3.17191 60.8802 5.33254 60.8802 7.99999C60.8802 10.6674 63.019 12.8281 65.6553 12.8281Z"
            fill="#2A2929"
          />
          <path
            d="M42.31 15.5799C41.3099 15.5799 40.4992 14.7636 40.4992 13.7568V9.86972C40.4056 9.95323 40.2967 10.0408 40.1713 10.128C39.6105 10.5181 38.7297 10.8952 37.4309 10.8952C35.8802 10.8952 34.3122 10.358 33.1289 9.28962C31.9413 8.21725 31.1542 6.62107 31.1542 4.5353V0.389963H34.6954V4.22299C34.6954 5.37062 34.9385 6.22731 35.3868 6.79266C35.8273 7.34815 36.4946 7.65829 37.4309 7.65829C38.4251 7.65829 39.1769 7.3327 39.6861 6.71136C40.202 6.08201 40.4992 5.11273 40.4992 3.76872V0.389963H44.0404V15.5799H42.31Z"
            fill="#2A2929"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.307 16C26.6793 16 30.222 12.4173 30.222 8C30.222 3.5827 26.6793 0 22.307 0C17.9348 0 14.3921 3.5827 14.3921 8C14.3921 12.4173 17.9348 16 22.307 16ZM22.307 12.8281C24.9433 12.8281 27.0821 10.6674 27.0821 7.99999C27.0821 5.33254 24.9433 3.17191 22.307 3.17191C19.6708 3.17191 17.5319 5.33254 17.5319 7.99999C17.5319 10.6674 19.6708 12.8281 22.307 12.8281Z"
            fill="#2A2929"
          />
          <path
            d="M5.67345 3.39974H1.77743C0.795783 3.39974 0 2.59854 0 1.61021V0.389963H14.8319V1.61021C14.8319 2.59854 14.0361 3.39974 13.0544 3.39974H9.21459V15.5799H5.67345V3.39974Z"
            fill="#2A2929"
          />
        </svg>
      );
    case "video-play":
      return (
        <svg
          style={style}
          xmlns="http://www.w3.org/2000/svg"
          width="69"
          height="64"
          viewBox="0 0 69 64"
          fill="none"
        >
          <g clipPath="url(#clip0_501_2176)">
            <g filter="url(#filter0_b_501_2176)">
              <path
                d="M66.3018 27.5418C69.8018 29.5625 69.8018 34.6143 66.3018 36.635L20.4192 63.1254C16.9192 65.1461 12.5442 62.6202 12.5442 58.5787L12.5442 5.59807C12.5442 1.55661 16.9192 -0.96929 20.4192 1.05144L66.3018 27.5418Z"
                fill="white"
                fillOpacity="0.6"
              />
              <path
                d="M65.9268 35.9855L20.0442 62.4758C17.0442 64.2079 13.2942 62.0428 13.2942 58.5787L13.2942 5.59807C13.2942 2.13396 17.0442 -0.0310961 20.0442 1.70096L65.9268 28.1913C68.9268 29.9233 68.9268 34.2535 65.9268 35.9855Z"
                stroke="url(#paint0_linear_501_2176)"
                strokeWidth="1.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_b_501_2176"
              x="3.54394"
              y="-8.66016"
              width="74.3828"
              height="81.4961"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_501_2176"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_501_2176"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_501_2176"
              x1="74.1768"
              y1="32.0884"
              x2="-8.00002"
              y2="32.0884"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7F7F7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_501_2176">
              <rect width="69" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "video-pause":
      return (
        <svg
          style={style}
          width="48"
          height="58"
          viewBox="0 0 48 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_466_2248)">
            <rect
              x="0.75"
              y="0.75"
              width="18.5"
              height="56.2351"
              rx="3.25"
              fill="white"
              fillOpacity="0.6"
              stroke="url(#paint0_linear_466_2248)"
              strokeWidth="1.5"
            />
            <rect
              x="28.75"
              y="0.75"
              width="18.5"
              height="56.2351"
              rx="3.25"
              fill="white"
              fillOpacity="0.6"
              stroke="url(#paint1_linear_466_2248)"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_466_2248"
              x="-9"
              y="-9"
              width="66"
              height="75.7344"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_466_2248"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_466_2248"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_466_2248"
              x1="20"
              y1="28.8676"
              x2="5.84013e-07"
              y2="28.8676"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_466_2248"
              x1="48"
              y1="28.8676"
              x2="28"
              y2="28.8676"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
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
        <svg width="78" height="79" viewBox="0 0 78 79" fill="none">
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
    case "chat-black":
      return (
        <svg width="77" height="77" viewBox="0 0 77 77" fill="none">
          <g filter="url(#filter0_f_554_3383)">
            <circle
              cx="38.5314"
              cy="38.3532"
              r="27.9059"
              fill="url(#paint0_linear_554_3383)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_554_3383"
              x="0.625488"
              y="0.447266"
              width="75.812"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_554_3383"
              />
            </filter>
            <linearGradient
              id="paint0_linear_554_3383"
              x1="17.1678"
              y1="22.5379"
              x2="53.5191"
              y2="62.1204"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopColor="#C8CFD0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "gazprom-case":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="76"
          viewBox="0 0 77 76"
          fill="none"
        >
          <g filter="url(#filter0_f_554_2537)">
            <circle
              cx="38.3434"
              cy="38.0934"
              r="27.9059"
              fill="url(#paint0_linear_554_2537)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_554_2537"
              x="0.4375"
              y="0.1875"
              width="75.812"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_554_2537"
              />
            </filter>
            <linearGradient
              id="paint0_linear_554_2537"
              x1="16.9798"
              y1="22.2782"
              x2="53.3311"
              y2="61.8606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F2EFF" />
              <stop offset="1" stopColor="#C373FA" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "vk-case":
      return (
        <svg width="77" height="76" viewBox="0 0 77 76" fill="none">
          <g filter="url(#filter0_f_589_962)">
            <circle
              cx="38.3434"
              cy="38.0934"
              r="27.9059"
              fill="url(#paint0_linear_589_962)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_589_962"
              x="0.4375"
              y="0.1875"
              width="75.812"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_589_962"
              />
            </filter>
            <linearGradient
              id="paint0_linear_589_962"
              x1="16.9798"
              y1="22.2782"
              x2="62.4805"
              y2="66.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E60FF" />
              <stop offset="1" stopColor="#FFFDE9" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "montblanc-case":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="76"
          viewBox="0 0 77 76"
          fill="none"
        >
          <g filter="url(#filter0_f_589_837)">
            <circle
              cx="38.3432"
              cy="38.0934"
              r="27.9059"
              fill="url(#paint0_linear_589_837)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_589_837"
              x="0.437256"
              y="0.1875"
              width="75.8118"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_589_837"
              />
            </filter>
            <linearGradient
              id="paint0_linear_589_837"
              x1="16.9796"
              y1="22.2782"
              x2="53.3309"
              y2="61.8606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBA58" />
              <stop offset="1" stopColor="#FF4A5C" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "skysmartbigday-case":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="76"
          viewBox="0 0 77 76"
          fill="none"
        >
          <g filter="url(#filter0_f_589_372)">
            <circle
              cx="38.3432"
              cy="38.0934"
              r="27.9059"
              fill="url(#paint0_linear_589_372)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_589_372"
              x="0.437256"
              y="0.1875"
              width="75.8118"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_589_372"
              />
            </filter>
            <linearGradient
              id="paint0_linear_589_372"
              x1="16.9796"
              y1="22.2782"
              x2="53.3309"
              y2="61.8606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBA58" />
              <stop offset="1" stopColor="#4AFFFF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "skysmartcamp-case":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="76"
          viewBox="0 0 77 76"
          fill="none"
        >
          <g filter="url(#filter0_f_589_1288)">
            <circle
              cx="38.3433"
              cy="38.0934"
              r="27.9059"
              fill="url(#paint0_linear_589_1288)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_589_1288"
              x="0.437378"
              y="0.1875"
              width="75.8118"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_589_1288"
              />
            </filter>
            <linearGradient
              id="paint0_linear_589_1288"
              x1="16.9797"
              y1="22.2782"
              x2="53.331"
              y2="61.8606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFBA58" />
              <stop offset="1" stopColor="#4AFFFF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "highload-case":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="76"
          viewBox="0 0 77 76"
          fill="none"
        >
          <g filter="url(#filter0_f_589_980)">
            <circle
              cx="38.3434"
              cy="38.0934"
              r="27.9059"
              fill="url(#paint0_linear_589_980)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_589_980"
              x="0.4375"
              y="0.1875"
              width="75.8115"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_589_980"
              />
            </filter>
            <linearGradient
              id="paint0_linear_589_980"
              x1="16.9798"
              y1="22.2782"
              x2="53.3311"
              y2="61.8606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E858FF" />
              <stop offset="1" stopColor="#FFED4A" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "helix-case":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="76"
          viewBox="0 0 77 76"
          fill="none"
        >
          <g filter="url(#filter0_f_589_539)">
            <circle
              cx="38.3434"
              cy="38.0934"
              r="27.9059"
              fill="url(#paint0_linear_589_539)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_589_539"
              x="0.4375"
              y="0.1875"
              width="75.8115"
              height="75.8125"
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
                stdDeviation="5"
                result="effect1_foregroundBlur_589_539"
              />
            </filter>
            <linearGradient
              id="paint0_linear_589_539"
              x1="16.9798"
              y1="22.2782"
              x2="53.3311"
              y2="61.8606"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E858FF" />
              <stop offset="1" stopColor="#4AFFE9" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return <></>;
  }
};

export default SvgSelector;
