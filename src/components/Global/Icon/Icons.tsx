import { IIcon } from "../../../lib";

const EmailIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 62 62`}
      fill="none"
      aria-labelledby="email-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Email Icon</title>
      <path
        d="M55.6795 10.3333C55.4447 10.3091 55.2081 10.3091 54.9734 10.3333H6.75116C6.44209 10.3381 6.13508 10.3844 5.83838 10.4711L30.7245 35.2539L55.6795 10.3333Z"
        fill={color}
      />
      <path
        d="M58.2284 12.7272L33.1529 37.6995C32.5075 38.341 31.6345 38.7011 30.7245 38.7011C29.8146 38.7011 28.9416 38.341 28.2962 37.6995L3.44453 12.9167C3.36813 13.1975 3.32762 13.4868 3.32397 13.7778V48.2222C3.32397 49.1358 3.68687 50.0119 4.33283 50.6578C4.97879 51.3038 5.8549 51.6667 6.76842 51.6667H54.9906C55.9042 51.6667 56.7803 51.3038 57.4262 50.6578C58.0722 50.0119 58.4351 49.1358 58.4351 48.2222V13.7778C58.4214 13.419 58.3517 13.0645 58.2284 12.7272V12.7272ZM9.12786 48.2222H6.73398V45.7595L19.2545 33.3422L21.6829 35.7706L9.12786 48.2222ZM54.9562 48.2222H52.5451L39.9901 35.7706L42.4184 33.3422L54.939 45.7595L54.9562 48.2222Z"
        fill={color}
      />
    </svg>
  );
};

const PhoneIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="phone-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Phone Icon</title>
      <path
        d="M40.0417 2.58334H19.3751C17.6622 2.58334 16.0195 3.26377 14.8084 4.47495C13.5972 5.68612 12.9167 7.32882 12.9167 9.04168V52.9583C12.9167 54.6712 13.5972 56.3139 14.8084 57.5251C16.0195 58.7363 17.6622 59.4167 19.3751 59.4167H40.0417C41.7546 59.4167 43.3973 58.7363 44.6085 57.5251C45.8197 56.3139 46.5001 54.6712 46.5001 52.9583V9.04168C46.5001 7.32882 45.8197 5.68612 44.6085 4.47495C43.3973 3.26377 41.7546 2.58334 40.0417 2.58334V2.58334ZM29.7084 56.8333C27.5642 56.8333 25.8334 55.1025 25.8334 52.9583C25.8334 50.8142 27.5642 49.0833 29.7084 49.0833C31.8526 49.0833 33.5834 50.8142 33.5834 52.9583C33.5834 55.1025 31.8526 56.8333 29.7084 56.8333ZM41.3334 46.5H18.0834V10.3333H41.3334V46.5Z"
        fill={color}
      />
    </svg>
  );
};

const CompareIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="compare-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Compare Icon</title>
      <path
        d="M39.525 34.3584L30.225 25.0584C29.9667 24.8 29.7841 24.5202 29.6774 24.2188C29.5689 23.9174 29.5146 23.5945 29.5146 23.25C29.5146 22.9056 29.5689 22.5827 29.6774 22.2813C29.7841 21.9799 29.9667 21.7 30.225 21.4417L39.525 12.1417C40.0417 11.625 40.6445 11.3667 41.3334 11.3667C42.0222 11.3667 42.625 11.625 43.1417 12.1417C43.6584 12.6584 43.9167 13.2715 43.9167 13.981C43.9167 14.6923 43.6584 15.3063 43.1417 15.8229L38.2979 20.6667H54.25C54.982 20.6667 55.5951 20.9138 56.0894 21.4081C56.5854 21.9041 56.8334 22.5181 56.8334 23.25C56.8334 23.982 56.5854 24.5951 56.0894 25.0894C55.5951 25.5854 54.982 25.8334 54.25 25.8334H38.2979L43.1417 30.6771C43.6584 31.1938 43.9167 31.7966 43.9167 32.4854C43.9167 33.1743 43.6584 33.7771 43.1417 34.2938C42.625 34.8104 42.0334 35.0903 41.3669 35.1334C40.6987 35.1764 40.0847 34.9181 39.525 34.3584V34.3584ZM18.8584 49.7938C19.375 50.3104 19.9778 50.5791 20.6667 50.5998C21.3556 50.6222 21.9584 50.375 22.475 49.8584L31.775 40.5584C32.0334 40.3 32.2168 40.0202 32.3253 39.7188C32.432 39.4174 32.4854 39.0945 32.4854 38.75C32.4854 38.4056 32.432 38.0827 32.3253 37.7813C32.2168 37.4799 32.0334 37.2 31.775 36.9417L22.475 27.6417C21.9584 27.125 21.3556 26.8667 20.6667 26.8667C19.9778 26.8667 19.375 27.125 18.8584 27.6417C18.3417 28.1584 18.0834 28.7715 18.0834 29.481C18.0834 30.1923 18.3417 30.8063 18.8584 31.3229L23.7021 36.1667H7.75002C7.01808 36.1667 6.40497 36.4138 5.91069 36.9081C5.41469 37.4041 5.16669 38.0181 5.16669 38.75C5.16669 39.482 5.41469 40.0951 5.91069 40.5894C6.40497 41.0854 7.01808 41.3334 7.75002 41.3334H23.7021L18.8584 46.1771C18.3417 46.6938 18.0834 47.2966 18.0834 47.9855C18.0834 48.6743 18.3417 49.2771 18.8584 49.7938V49.7938Z"
        fill={color}
      />
    </svg>
  );
};

const ArrowCircleLeftIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="arrow-circle-left-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow Circle Left Solid Icon</title>
      <path
        d="M29.2563 39.5896C29.7299 40.0632 30.3224 40.2888 31.0337 40.2664C31.7432 40.2457 32.3348 39.9986 32.8084 39.525C33.282 39.0514 33.5188 38.4486 33.5188 37.7167C33.5188 36.9847 33.282 36.3819 32.8084 35.9083L30.4834 33.5833H38.8147C39.5466 33.5833 40.1494 33.3353 40.623 32.8393C41.0966 32.345 41.3334 31.7319 41.3334 31C41.3334 30.268 41.0863 29.6541 40.592 29.1581C40.096 28.6638 39.482 28.4167 38.7501 28.4167H30.4834L32.873 26.0271C33.3466 25.5535 33.5731 24.961 33.5524 24.2497C33.53 23.5402 33.282 22.9486 32.8084 22.475C32.3348 22.0014 31.732 21.7646 31.0001 21.7646C30.2681 21.7646 29.6654 22.0014 29.1918 22.475L22.4751 29.1917C22.0015 29.6653 21.7647 30.268 21.7647 31C21.7647 31.7319 22.0015 32.3347 22.4751 32.8083L29.2563 39.5896ZM31.0001 56.8333C27.4265 56.8333 24.0681 56.1548 20.9251 54.7977C17.782 53.4423 15.048 51.6021 12.723 49.2771C10.398 46.9521 8.5578 44.218 7.20242 41.075C5.8453 37.9319 5.16675 34.5736 5.16675 31C5.16675 27.4264 5.8453 24.068 7.20242 20.925C8.5578 17.7819 10.398 15.0479 12.723 12.7229C15.048 10.3979 17.782 8.55685 20.9251 7.19974C24.0681 5.84435 27.4265 5.16666 31.0001 5.16666C34.5737 5.16666 37.932 5.84435 41.0751 7.19974C44.2181 8.55685 46.9522 10.3979 49.2772 12.7229C51.6022 15.0479 53.4424 17.7819 54.7978 20.925C56.1549 24.068 56.8334 27.4264 56.8334 31C56.8334 34.5736 56.1549 37.9319 54.7978 41.075C53.4424 44.218 51.6022 46.9521 49.2772 49.2771C46.9522 51.6021 44.2181 53.4423 41.0751 54.7977C37.932 56.1548 34.5737 56.8333 31.0001 56.8333Z"
        fill={color}
      />
    </svg>
  );
};

const ArrowCircleRightIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="arrow-circle-right-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow Circle Right Solid Icon</title>
      <path
        d="M32.8084 39.525L39.5251 32.8083C39.9987 32.3347 40.2355 31.7319 40.2355 31C40.2355 30.268 39.9987 29.6653 39.5251 29.1917L32.7438 22.4104C32.2702 21.9368 31.6786 21.7103 30.9691 21.731C30.2578 21.7534 29.6654 22.0014 29.1918 22.475C28.7181 22.9486 28.4813 23.5514 28.4813 24.2833C28.4813 25.0153 28.7181 25.618 29.1918 26.0917L31.5167 28.4167H23.1855C22.4536 28.4167 21.8508 28.6638 21.3772 29.1581C20.9036 29.6541 20.6667 30.268 20.6667 31C20.6667 31.7319 20.9147 32.345 21.4107 32.8393C21.905 33.3353 22.5181 33.5833 23.2501 33.5833H31.5167L29.1272 35.9729C28.6536 36.4465 28.4271 37.039 28.4477 37.7502C28.4701 38.4598 28.7181 39.0514 29.1918 39.525C29.6654 39.9986 30.2681 40.2354 31.0001 40.2354C31.732 40.2354 32.3348 39.9986 32.8084 39.525V39.525ZM31.0001 56.8333C27.4265 56.8333 24.0681 56.1548 20.9251 54.7977C17.782 53.4423 15.048 51.6021 12.723 49.2771C10.398 46.9521 8.5578 44.218 7.20242 41.075C5.8453 37.9319 5.16675 34.5736 5.16675 31C5.16675 27.4264 5.8453 24.068 7.20242 20.925C8.5578 17.7819 10.398 15.0479 12.723 12.7229C15.048 10.3979 17.782 8.55685 20.9251 7.19974C24.0681 5.84435 27.4265 5.16666 31.0001 5.16666C34.5737 5.16666 37.932 5.84435 41.0751 7.19974C44.2181 8.55685 46.9522 10.3979 49.2772 12.7229C51.6022 15.0479 53.4424 17.7819 54.7978 20.925C56.1549 24.068 56.8334 27.4264 56.8334 31C56.8334 34.5736 56.1549 37.9319 54.7978 41.075C53.4424 44.218 51.6022 46.9521 49.2772 49.2771C46.9522 51.6021 44.2181 53.4423 41.0751 54.7977C37.932 56.1548 34.5737 56.8333 31.0001 56.8333Z"
        fill={color}
      />
    </svg>
  );
};

const OfficeIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="building-office-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Building Office Solid Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.625 5.8125C11.1111 5.8125 10.6183 6.01663 10.255 6.37998C9.89163 6.74333 9.6875 7.23614 9.6875 7.75C9.6875 8.26386 9.89163 8.75667 10.255 9.12002C10.6183 9.48337 11.1111 9.6875 11.625 9.6875V52.3125H9.6875C9.17364 52.3125 8.68083 52.5166 8.31748 52.88C7.95413 53.2433 7.75 53.7361 7.75 54.25C7.75 54.7639 7.95413 55.2567 8.31748 55.62C8.68083 55.9834 9.17364 56.1875 9.6875 56.1875H52.3125C52.8264 56.1875 53.3192 55.9834 53.6825 55.62C54.0459 55.2567 54.25 54.7639 54.25 54.25C54.25 53.7361 54.0459 53.2433 53.6825 52.88C53.3192 52.5166 52.8264 52.3125 52.3125 52.3125H50.375V9.6875C50.8889 9.6875 51.3817 9.48337 51.745 9.12002C52.1084 8.75667 52.3125 8.26386 52.3125 7.75C52.3125 7.23614 52.1084 6.74333 51.745 6.37998C51.3817 6.01663 50.8889 5.8125 50.375 5.8125H11.625ZM23.25 15.5C22.7361 15.5 22.2433 15.7041 21.88 16.0675C21.5166 16.4308 21.3125 16.9236 21.3125 17.4375C21.3125 17.9514 21.5166 18.4442 21.88 18.8075C22.2433 19.1709 22.7361 19.375 23.25 19.375H27.125C27.6389 19.375 28.1317 19.1709 28.495 18.8075C28.8584 18.4442 29.0625 17.9514 29.0625 17.4375C29.0625 16.9236 28.8584 16.4308 28.495 16.0675C28.1317 15.7041 27.6389 15.5 27.125 15.5H23.25ZM21.3125 25.1875C21.3125 24.6736 21.5166 24.1808 21.88 23.8175C22.2433 23.4541 22.7361 23.25 23.25 23.25H27.125C27.6389 23.25 28.1317 23.4541 28.495 23.8175C28.8584 24.1808 29.0625 24.6736 29.0625 25.1875C29.0625 25.7014 28.8584 26.1942 28.495 26.5575C28.1317 26.9209 27.6389 27.125 27.125 27.125H23.25C22.7361 27.125 22.2433 26.9209 21.88 26.5575C21.5166 26.1942 21.3125 25.7014 21.3125 25.1875ZM23.25 31C22.7361 31 22.2433 31.2041 21.88 31.5675C21.5166 31.9308 21.3125 32.4236 21.3125 32.9375C21.3125 33.4514 21.5166 33.9442 21.88 34.3075C22.2433 34.6709 22.7361 34.875 23.25 34.875H27.125C27.6389 34.875 28.1317 34.6709 28.495 34.3075C28.8584 33.9442 29.0625 33.4514 29.0625 32.9375C29.0625 32.4236 28.8584 31.9308 28.495 31.5675C28.1317 31.2041 27.6389 31 27.125 31H23.25ZM32.9375 17.4375C32.9375 16.9236 33.1416 16.4308 33.505 16.0675C33.8683 15.7041 34.3611 15.5 34.875 15.5H38.75C39.2639 15.5 39.7567 15.7041 40.12 16.0675C40.4834 16.4308 40.6875 16.9236 40.6875 17.4375C40.6875 17.9514 40.4834 18.4442 40.12 18.8075C39.7567 19.1709 39.2639 19.375 38.75 19.375H34.875C34.3611 19.375 33.8683 19.1709 33.505 18.8075C33.1416 18.4442 32.9375 17.9514 32.9375 17.4375ZM34.875 23.25C34.3611 23.25 33.8683 23.4541 33.505 23.8175C33.1416 24.1808 32.9375 24.6736 32.9375 25.1875C32.9375 25.7014 33.1416 26.1942 33.505 26.5575C33.8683 26.9209 34.3611 27.125 34.875 27.125H38.75C39.2639 27.125 39.7567 26.9209 40.12 26.5575C40.4834 26.1942 40.6875 25.7014 40.6875 25.1875C40.6875 24.6736 40.4834 24.1808 40.12 23.8175C39.7567 23.4541 39.2639 23.25 38.75 23.25H34.875ZM32.9375 32.9375C32.9375 32.4236 33.1416 31.9308 33.505 31.5675C33.8683 31.2041 34.3611 31 34.875 31H38.75C39.2639 31 39.7567 31.2041 40.12 31.5675C40.4834 31.9308 40.6875 32.4236 40.6875 32.9375C40.6875 33.4514 40.4834 33.9442 40.12 34.3075C39.7567 34.6709 39.2639 34.875 38.75 34.875H34.875C34.3611 34.875 33.8683 34.6709 33.505 34.3075C33.1416 33.9442 32.9375 33.4514 32.9375 32.9375ZM23.25 50.375V44.5625C23.25 44.0486 23.4541 43.5558 23.8175 43.1925C24.1808 42.8291 24.6736 42.625 25.1875 42.625H36.8125C37.3264 42.625 37.8192 42.8291 38.1825 43.1925C38.5459 43.5558 38.75 44.0486 38.75 44.5625V50.375C38.75 50.8889 38.5459 51.3817 38.1825 51.745C37.8192 52.1084 37.3264 52.3125 36.8125 52.3125H25.1875C24.6736 52.3125 24.1808 52.1084 23.8175 51.745C23.4541 51.3817 23.25 50.8889 23.25 50.375Z"
        fill={color}
      />
    </svg>
  );
};

const CalendarIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="calendar-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Calendar Icon</title>
      <path
        d="M31 36.1667C30.2681 36.1667 29.6549 35.9187 29.1607 35.4227C28.6647 34.9284 28.4167 34.3153 28.4167 33.5834C28.4167 32.8514 28.6647 32.2374 29.1607 31.7414C29.6549 31.2472 30.2681 31 31 31C31.7319 31 32.3459 31.2472 32.8419 31.7414C33.3362 32.2374 33.5833 32.8514 33.5833 33.5834C33.5833 34.3153 33.3362 34.9284 32.8419 35.4227C32.3459 35.9187 31.7319 36.1667 31 36.1667ZM20.6667 36.1667C19.9347 36.1667 19.3208 35.9187 18.8248 35.4227C18.3305 34.9284 18.0833 34.3153 18.0833 33.5834C18.0833 32.8514 18.3305 32.2374 18.8248 31.7414C19.3208 31.2472 19.9347 31 20.6667 31C21.3986 31 22.0126 31.2472 22.5086 31.7414C23.0029 32.2374 23.25 32.8514 23.25 33.5834C23.25 34.3153 23.0029 34.9284 22.5086 35.4227C22.0126 35.9187 21.3986 36.1667 20.6667 36.1667ZM41.3333 36.1667C40.6014 36.1667 39.9883 35.9187 39.494 35.4227C38.998 34.9284 38.75 34.3153 38.75 33.5834C38.75 32.8514 38.998 32.2374 39.494 31.7414C39.9883 31.2472 40.6014 31 41.3333 31C42.0653 31 42.6784 31.2472 43.1727 31.7414C43.6687 32.2374 43.9167 32.8514 43.9167 33.5834C43.9167 34.3153 43.6687 34.9284 43.1727 35.4227C42.6784 35.9187 42.0653 36.1667 41.3333 36.1667ZM31 46.5C30.2681 46.5 29.6549 46.252 29.1607 45.756C28.6647 45.2617 28.4167 44.6486 28.4167 43.9167C28.4167 43.1847 28.6647 42.5716 29.1607 42.0774C29.6549 41.5814 30.2681 41.3334 31 41.3334C31.7319 41.3334 32.3459 41.5814 32.8419 42.0774C33.3362 42.5716 33.5833 43.1847 33.5833 43.9167C33.5833 44.6486 33.3362 45.2617 32.8419 45.756C32.3459 46.252 31.7319 46.5 31 46.5ZM20.6667 46.5C19.9347 46.5 19.3208 46.252 18.8248 45.756C18.3305 45.2617 18.0833 44.6486 18.0833 43.9167C18.0833 43.1847 18.3305 42.5716 18.8248 42.0774C19.3208 41.5814 19.9347 41.3334 20.6667 41.3334C21.3986 41.3334 22.0126 41.5814 22.5086 42.0774C23.0029 42.5716 23.25 43.1847 23.25 43.9167C23.25 44.6486 23.0029 45.2617 22.5086 45.756C22.0126 46.252 21.3986 46.5 20.6667 46.5ZM41.3333 46.5C40.6014 46.5 39.9883 46.252 39.494 45.756C38.998 45.2617 38.75 44.6486 38.75 43.9167C38.75 43.1847 38.998 42.5716 39.494 42.0774C39.9883 41.5814 40.6014 41.3334 41.3333 41.3334C42.0653 41.3334 42.6784 41.5814 43.1727 42.0774C43.6687 42.5716 43.9167 43.1847 43.9167 43.9167C43.9167 44.6486 43.6687 45.2617 43.1727 45.756C42.6784 46.252 42.0653 46.5 41.3333 46.5ZM12.9167 56.8334C11.4958 56.8334 10.2791 56.3279 9.26642 55.3169C8.25547 54.3043 7.75 53.0875 7.75 51.6667V15.5C7.75 14.0792 8.25547 12.8633 9.26642 11.8524C10.2791 10.8397 11.4958 10.3334 12.9167 10.3334H15.5V5.16669H20.6667V10.3334H41.3333V5.16669H46.5V10.3334H49.0833C50.5042 10.3334 51.7209 10.8397 52.7336 11.8524C53.7445 12.8633 54.25 14.0792 54.25 15.5V51.6667C54.25 53.0875 53.7445 54.3043 52.7336 55.3169C51.7209 56.3279 50.5042 56.8334 49.0833 56.8334H12.9167ZM12.9167 51.6667H49.0833V25.8334H12.9167V51.6667Z"
        fill={color}
      />
    </svg>
  );
};

const FabricIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="fabric-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fabric Icon</title>
      <path
        d="M7.75 56.8334L11.625 52.9584L15.5 56.8334L19.375 52.9584L23.25 56.8334L27.125 52.9584L31 56.8334L34.875 52.9584L38.75 56.8334L42.625 52.9584L46.5 56.8334L50.375 52.9584L54.25 56.8334V5.16669L50.375 9.04169L46.5 5.16669L42.625 9.04169L38.75 5.16669L34.875 9.04169L31 5.16669L27.125 9.04169L23.25 5.16669L19.375 9.04169L15.5 5.16669L11.625 9.04169L7.75 5.16669"
        fill={color}
      />
    </svg>
  );
};

const FacebookIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="facebook-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facebook Icon</title>
      <path
        d="M56.8334 31C56.8334 16.74 45.2601 5.16666 31.0001 5.16666C16.7401 5.16666 5.16675 16.74 5.16675 31C5.16675 43.5033 14.0534 53.9142 25.8334 56.3167V38.75H20.6667V31H25.8334V24.5417C25.8334 19.5558 29.8892 15.5 34.8751 15.5H41.3334V23.25H36.1667C34.7459 23.25 33.5834 24.4125 33.5834 25.8333V31H41.3334V38.75H33.5834V56.7042C46.6292 55.4125 56.8334 44.4075 56.8334 31Z"
        fill={color}
      />
    </svg>
  );
};

const InstagramIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="instagram-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instagram Icon</title>
      <path
        d="M31.0001 5.16666C38.019 5.16666 38.8947 5.19249 41.6486 5.32166C44.3998 5.45082 46.2727 5.88224 47.9209 6.52291C49.6259 7.17907 51.0622 8.06774 52.4986 9.50149C53.8122 10.7929 54.8286 12.355 55.4772 14.0792C56.1152 15.7247 56.5492 17.6002 56.6784 20.3515C56.7998 23.1053 56.8334 23.9811 56.8334 31C56.8334 38.0189 56.8076 38.8947 56.6784 41.6485C56.5492 44.3997 56.1152 46.2727 55.4772 47.9208C54.8305 49.6459 53.8138 51.2084 52.4986 52.4985C51.2068 53.8116 49.6448 54.828 47.9209 55.4771C46.2753 56.1152 44.3998 56.5492 41.6486 56.6783C38.8947 56.7997 38.019 56.8333 31.0001 56.8333C23.9812 56.8333 23.1054 56.8075 20.3516 56.6783C17.6003 56.5492 15.7274 56.1152 14.0792 55.4771C12.3544 54.8299 10.792 53.8133 9.50158 52.4985C8.18771 51.2073 7.17124 49.6451 6.523 47.9208C5.88233 46.2752 5.45091 44.3997 5.32175 41.6485C5.20033 38.8947 5.16675 38.0189 5.16675 31C5.16675 23.9811 5.19258 23.1053 5.32175 20.3515C5.45091 17.5977 5.88233 15.7273 6.523 14.0792C7.16944 12.354 8.18616 10.7914 9.50158 9.50149C10.7924 8.18717 12.3547 7.17062 14.0792 6.52291C15.7274 5.88224 17.5977 5.45082 20.3516 5.32166C23.1054 5.20024 23.9812 5.16666 31.0001 5.16666ZM31.0001 18.0833C27.5744 18.0833 24.289 19.4442 21.8666 21.8665C19.4443 24.2889 18.0834 27.5743 18.0834 31C18.0834 34.4257 19.4443 37.7111 21.8666 40.1335C24.289 42.5558 27.5744 43.9167 31.0001 43.9167C34.4258 43.9167 37.7112 42.5558 40.1335 40.1335C42.5559 37.7111 43.9167 34.4257 43.9167 31C43.9167 27.5743 42.5559 24.2889 40.1335 21.8665C37.7112 19.4442 34.4258 18.0833 31.0001 18.0833V18.0833ZM47.7917 17.4375C47.7917 16.5811 47.4515 15.7597 46.8459 15.1541C46.2404 14.5485 45.419 14.2083 44.5626 14.2083C43.7062 14.2083 42.8848 14.5485 42.2792 15.1541C41.6736 15.7597 41.3334 16.5811 41.3334 17.4375C41.3334 18.2939 41.6736 19.1153 42.2792 19.7209C42.8848 20.3264 43.7062 20.6667 44.5626 20.6667C45.419 20.6667 46.2404 20.3264 46.8459 19.7209C47.4515 19.1153 47.7917 18.2939 47.7917 17.4375ZM31.0001 23.25C33.0555 23.25 35.0268 24.0665 36.4802 25.5199C37.9336 26.9733 38.7501 28.9446 38.7501 31C38.7501 33.0554 37.9336 35.0267 36.4802 36.4801C35.0268 37.9335 33.0555 38.75 31.0001 38.75C28.9447 38.75 26.9734 37.9335 25.52 36.4801C24.0666 35.0267 23.2501 33.0554 23.2501 31C23.2501 28.9446 24.0666 26.9733 25.52 25.5199C26.9734 24.0665 28.9447 23.25 31.0001 23.25V23.25Z"
        fill={color}
      />
    </svg>
  );
};

const RibbonStarFilledIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="ribbon-star-filled-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ribbon Star Filled Icon</title>
      <path
        d="M43.9167 54.8829L43.9219 39.3829C40.2585 42.325 35.6986 43.9249 31.0001 43.9167C26.3036 43.9245 21.7458 42.3256 18.0834 39.3855L18.0912 54.8855C18.092 55.2398 18.19 55.5871 18.3744 55.8895C18.5588 56.192 18.8227 56.4381 19.1372 56.6011C19.4518 56.7641 19.805 56.8378 20.1585 56.814C20.5119 56.7903 20.8521 56.6701 21.1421 56.4665L31.0027 49.5251L40.8658 56.4665C41.156 56.671 41.4967 56.7918 41.8508 56.8158C42.2049 56.8398 42.5588 56.7661 42.8738 56.6027C43.1889 56.4393 43.453 56.1925 43.6374 55.8892C43.8218 55.5859 43.9193 55.2379 43.9193 54.8829H43.9167ZM49.0834 23.25C49.0834 20.8753 48.6157 18.5238 47.7069 16.3298C46.7981 14.1359 45.4661 12.1424 43.7869 10.4632C42.1077 8.78398 40.1142 7.45197 37.9203 6.5432C35.7263 5.63443 33.3748 5.16669 31.0001 5.16669C28.6253 5.16669 26.2739 5.63443 24.0799 6.5432C21.8859 7.45197 19.8924 8.78398 18.2132 10.4632C16.534 12.1424 15.202 14.1359 14.2933 16.3298C13.3845 18.5238 12.9167 20.8753 12.9167 23.25C12.9167 28.046 14.822 32.6456 18.2132 36.0369C21.6045 39.4282 26.2041 41.3334 31.0001 41.3334C35.7961 41.3334 40.3956 39.4282 43.7869 36.0369C47.1782 32.6456 49.0834 28.046 49.0834 23.25ZM31.5917 14.5752L33.9477 19.3621L39.228 20.1242C39.7705 20.2017 39.9849 20.8682 39.5948 21.2479L35.7741 24.9679L36.6782 30.2276C36.6991 30.3488 36.6857 30.4734 36.6394 30.5873C36.5932 30.7013 36.5159 30.8 36.4164 30.8723C36.317 30.9446 36.1993 30.9877 36.0766 30.9965C35.9539 31.0054 35.8313 30.9798 35.7224 30.9225L31.0001 28.4374L26.2803 30.9225C26.1715 30.9798 26.0488 31.0054 25.9261 30.9965C25.8035 30.9877 25.6858 30.9446 25.5863 30.8723C25.4868 30.8 25.4096 30.7013 25.3633 30.5873C25.3171 30.4734 25.3036 30.3488 25.3245 30.2276L26.2287 24.9705L22.4053 21.2505C22.3165 21.1647 22.2535 21.0557 22.2237 20.9358C22.1939 20.8159 22.1983 20.6901 22.2366 20.5727C22.2748 20.4552 22.3453 20.3509 22.44 20.2716C22.5347 20.1923 22.6498 20.1412 22.7722 20.1242L28.0525 19.3621L30.4085 14.5752C30.4627 14.4645 30.5469 14.3713 30.6515 14.306C30.7561 14.2408 30.8768 14.2062 31.0001 14.2062C31.1233 14.2062 31.2441 14.2408 31.3487 14.306C31.4533 14.3713 31.5374 14.4645 31.5917 14.5752V14.5752Z"
        fill={color}
      />
    </svg>
  );
};

const LocationIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="location-filled-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Location Filled Icon</title>
      <path
        d="M30.9999 31C32.4208 31 33.6375 30.4937 34.6502 29.481C35.6611 28.47 36.1666 27.2542 36.1666 25.8333C36.1666 24.4125 35.6611 23.1957 34.6502 22.1831C33.6375 21.1721 32.4208 20.6667 30.9999 20.6667C29.5791 20.6667 28.3632 21.1721 27.3523 22.1831C26.3396 23.1957 25.8333 24.4125 25.8333 25.8333C25.8333 27.2542 26.3396 28.47 27.3523 29.481C28.3632 30.4937 29.5791 31 30.9999 31ZM30.9999 55.8646C30.6555 55.8646 30.311 55.8 29.9666 55.6708C29.6221 55.5417 29.3208 55.3694 29.0624 55.1542C22.7763 49.6 18.0833 44.4445 14.9833 39.6877C11.8833 34.9292 10.3333 30.4833 10.3333 26.35C10.3333 19.8917 12.4111 14.7465 16.5668 10.9146C20.7208 7.08263 25.5319 5.16666 30.9999 5.16666C36.468 5.16666 41.279 7.08263 45.433 10.9146C49.5887 14.7465 51.6666 19.8917 51.6666 26.35C51.6666 30.4833 50.1166 34.9292 47.0166 39.6877C43.9166 44.4445 39.2235 49.6 32.9374 55.1542C32.6791 55.3694 32.3777 55.5417 32.0333 55.6708C31.6888 55.8 31.3444 55.8646 30.9999 55.8646Z"
        fill={color}
      />
    </svg>
  );
};

const PersonIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="person-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Person Icon</title>
      <path
        d="M30.9999 31C28.1583 31 25.7256 29.9882 23.702 27.9646C21.6784 25.941 20.6666 23.5083 20.6666 20.6667C20.6666 17.825 21.6784 15.3924 23.702 13.3688C25.7256 11.3451 28.1583 10.3333 30.9999 10.3333C33.8416 10.3333 36.2742 11.3451 38.2978 13.3688C40.3214 15.3924 41.3333 17.825 41.3333 20.6667C41.3333 23.5083 40.3214 25.941 38.2978 27.9646C36.2742 29.9882 33.8416 31 30.9999 31ZM10.3333 51.6667V44.4333C10.3333 42.9695 10.7104 41.6235 11.4648 40.3956C12.2174 39.1694 13.218 38.2333 14.4666 37.5875C17.136 36.2528 19.8485 35.2513 22.6041 34.5831C25.3596 33.9166 28.1583 33.5833 30.9999 33.5833C33.8416 33.5833 36.6402 33.9166 39.3958 34.5831C42.1513 35.2513 44.8638 36.2528 47.5332 37.5875C48.7819 38.2333 49.7825 39.1694 50.5351 40.3956C51.2894 41.6235 51.6666 42.9695 51.6666 44.4333V51.6667H10.3333Z"
        fill={color}
      />
    </svg>
  );
};

const FlagIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="flag-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Flag Icon</title>
      <path
        d="M37.2001 15.5L36.5801 12.4C36.3476 11.2116 35.2884 10.3333 34.0484 10.3333H15.5001C14.0792 10.3333 12.9167 11.4958 12.9167 12.9166V51.6666C12.9167 53.0875 14.0792 54.25 15.5001 54.25C16.9209 54.25 18.0834 53.0875 18.0834 51.6666V36.1666H32.5501L33.1701 39.2666C33.4026 40.4808 34.4617 41.3333 35.7017 41.3333H49.0834C50.5042 41.3333 51.6667 40.1708 51.6667 38.75V18.0833C51.6667 16.6625 50.5042 15.5 49.0834 15.5H37.2001Z"
        fill={color}
      />
    </svg>
  );
};

const RulerIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="ruler-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ruler Icon</title>
      <path
        d="M38.75 54.25H33.5833V46.5H28.4167V54.25H23.25V49.0833H18.0833V54.25H10.3333C9.64819 54.25 8.99111 53.9778 8.50664 53.4934C8.02217 53.0089 7.75 52.3518 7.75 51.6667V43.9167H12.9167V38.75H7.75V33.5833H15.5V28.4167H7.75V23.25H12.9167V18.0833H7.75V10.3333C7.75 9.64819 8.02217 8.99111 8.50664 8.50664C8.99111 8.02217 9.64819 7.75 10.3333 7.75H25.8333C26.5185 7.75 27.1756 8.02217 27.66 8.50664C28.1445 8.99111 28.4167 9.64819 28.4167 10.3333V33.5833H51.6667C52.3518 33.5833 53.0089 33.8555 53.4934 34.34C53.9778 34.8244 54.25 35.4815 54.25 36.1667V51.6667C54.25 52.3518 53.9778 53.0089 53.4934 53.4934C53.0089 53.9778 52.3518 54.25 51.6667 54.25H43.9167V49.0833H38.75V54.25Z"
        fill={color}
      />
    </svg>
  );
};

const DeliveryTruckIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="delivery-truck-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Delivery Truck Icon</title>
      <path
        d="M7.74992 10.3333C6.37963 10.3333 5.06547 10.8777 4.09653 11.8466C3.1276 12.8155 2.58325 14.1297 2.58325 15.5V43.9166H7.74992C7.74992 45.9721 8.56643 47.9433 10.0198 49.3967C11.4732 50.8501 13.4445 51.6666 15.4999 51.6666C17.5553 51.6666 19.5266 50.8501 20.98 49.3967C22.4334 47.9433 23.2499 45.9721 23.2499 43.9166H38.7499C38.7499 45.9721 39.5664 47.9433 41.0198 49.3967C42.4732 50.8501 44.4445 51.6666 46.4999 51.6666C48.5553 51.6666 50.5266 50.8501 51.98 49.3967C53.4334 47.9433 54.2499 45.9721 54.2499 43.9166H59.4166V31L51.6666 20.6666H43.9166V10.3333M25.8333 15.5L36.1666 25.8333L25.8333 36.1666V28.4166H10.3333V23.25H25.8333M43.9166 24.5416H50.3749L55.4641 31H43.9166M15.4999 40.0416C16.5276 40.0416 17.5133 40.4499 18.24 41.1766C18.9667 41.9033 19.3749 42.8889 19.3749 43.9166C19.3749 44.9444 18.9667 45.93 18.24 46.6567C17.5133 47.3834 16.5276 47.7916 15.4999 47.7916C14.4722 47.7916 13.4866 47.3834 12.7599 46.6567C12.0332 45.93 11.6249 44.9444 11.6249 43.9166C11.6249 42.8889 12.0332 41.9033 12.7599 41.1766C13.4866 40.4499 14.4722 40.0416 15.4999 40.0416M46.4999 40.0416C47.5276 40.0416 48.5133 40.4499 49.24 41.1766C49.9667 41.9033 50.3749 42.8889 50.3749 43.9166C50.3749 44.9444 49.9667 45.93 49.24 46.6567C48.5133 47.3834 47.5276 47.7916 46.4999 47.7916C45.4722 47.7916 44.4866 47.3834 43.7599 46.6567C43.0332 45.93 42.6249 44.9444 42.6249 43.9166C42.6249 42.8889 43.0332 41.9033 43.7599 41.1766C44.4866 40.4499 45.4722 40.0416 46.4999 40.0416Z"
        fill={color}
      />
    </svg>
  );
};

const SofaIcon = ({ width, height, color }: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 62"
      fill="none"
      aria-labelledby="sofa-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sofa Icon | Website Logo</title>
      <path
        d="M32.2917 18.0832C32.2917 15.2157 34.5908 12.9165 37.4583 12.9165H46.5C49.3417 12.9165 51.6667 15.2415 51.6667 18.0832V23.6632C48.67 24.7223 46.5 27.564 46.5 30.9223V36.1665H32.2917V18.0832ZM15.5 30.8965V36.1665H29.7083V18.0832C29.7083 15.2157 27.4092 12.9165 24.5417 12.9165H15.5C12.6583 12.9165 10.3333 15.2415 10.3333 18.0832V23.6373C13.33 24.6965 15.5 27.564 15.5 30.8965ZM53.3717 25.9107C50.84 26.324 49.0834 28.7265 49.0834 31.3098V38.7498H12.9167V30.9998C12.9167 29.6296 12.3723 28.3154 11.4034 27.3465C10.4345 26.3775 9.1203 25.8332 7.75001 25.8332C6.37973 25.8332 5.06556 26.3775 4.09663 27.3465C3.12769 28.3154 2.58334 29.6296 2.58334 30.9998V43.9165C2.58334 46.7582 4.90834 49.0832 7.75001 49.0832V54.2498H12.9167V49.0832H49.0834V54.2498H54.25V49.0832C57.0917 49.0832 59.4167 46.7582 59.4167 43.9165V30.9998C59.4167 27.874 56.6009 25.3682 53.3717 25.9107Z"
        fill={color}
      />
    </svg>
  );
};

export {
  EmailIcon,
  PhoneIcon,
  CompareIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  OfficeIcon,
  CalendarIcon,
  FabricIcon,
  FacebookIcon,
  InstagramIcon,
  RibbonStarFilledIcon,
  LocationIcon,
  PersonIcon,
  FlagIcon,
  RulerIcon,
  DeliveryTruckIcon,
  SofaIcon,
};
