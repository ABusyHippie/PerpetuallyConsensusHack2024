/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Bye = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="160"
      viewBox="0 0 161 160"
      width="161"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M41.3993 61.4322C42.9993 62.5922 60.9993 61.1202 62.9433 60.2962C63.4233 60.0882 63.5273 58.9682 63.5913 58.4002C64.3913 50.6562 62.7913 19.5602 61.3033 17.6962C60.3833 16.5522 54.5673 19.0562 49.6233 25.6082C43.4073 33.8722 41.1433 44.5202 40.7593 54.9362C40.6045 57.0151 40.7473 59.1056 41.1833 61.1442C41.22 61.2622 41.2963 61.364 41.3993 61.4322ZM41.4553 54.9602C41.8153 44.7122 44.0073 34.0962 50.0153 25.9042C54.9833 19.1442 60.4153 17.1042 61.0793 17.9042C62.5753 19.7522 63.8953 57.0082 62.6073 59.6882C60.3513 60.5522 43.6713 61.7042 41.8073 60.8882C41.4176 58.9378 41.2992 56.943 41.4553 54.9602ZM61.3033 103.632C61.3838 103.569 61.438 103.477 61.4553 103.376C61.8553 101.416 61.3113 88.2402 60.4073 87.1122C60.3697 87.0616 60.3217 87.0198 60.2665 86.9894C60.2112 86.9591 60.1502 86.9409 60.0873 86.9362C58.0153 86.8082 43.9273 88.0882 41.8553 88.2802C41.0553 88.3522 41.7113 101.96 42.8553 104.504C42.9124 104.609 43.0065 104.689 43.1193 104.728C44.4793 105.272 60.2153 104.608 61.3033 103.632ZM43.3593 104.072C42.4233 101.672 41.5353 91.1922 41.9833 88.5602C43.9993 88.4322 57.8713 87.5202 59.9033 87.5922C60.6153 89.6882 61.1193 101.136 60.7673 103.168C60.7673 103.112 60.7673 103.056 60.8313 103.096C61.1673 103.528 48.0313 104.496 44.0313 104.232H43.4953C43.3593 104.232 43.4153 104.216 43.3593 104.072ZM62.4393 113.952C62.3513 113.664 62.2153 113.328 61.9113 113.312C59.8313 113.184 45.7513 114.456 43.6713 114.648C42.8713 114.72 43.5193 128.328 44.6713 130.872C44.6971 130.926 44.7339 130.974 44.7794 131.012C44.8249 131.051 44.878 131.08 44.9353 131.096C46.2873 131.632 62.0233 130.984 63.1193 130.008C63.1954 129.941 63.2486 129.851 63.2713 129.752C63.6793 127.736 63.1513 116.36 62.4393 113.952ZM62.6473 129.464C62.9673 129.888 49.9593 130.872 45.8473 130.6H45.3833C45.2473 130.6 45.1993 130.552 45.1353 130.384C44.2153 127.84 43.3513 117.544 43.7993 114.944C45.8873 114.808 59.6793 113.904 61.7193 113.984C62.4313 116.08 62.9273 127.528 62.5673 129.552C62.5913 129.488 62.6153 129.432 62.6473 129.464Z"
        fill="#1C1917"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M154.879 131.448C154.767 130.792 153.783 130.208 153.151 129.848C151.647 129.048 149.343 128.104 147.655 127.384C147.967 126.832 149.415 124.304 149.375 123.752C149.375 123.32 148.879 122.904 148.575 122.624C144.575 119.424 125.975 111.744 123.943 110.52C124.543 107.552 125.047 104.336 125.463 101.096C126.623 100.704 127.927 100.12 129.175 99.6561C130.983 99.3521 134.639 98.1361 135.679 97.8801C137.175 97.4194 138.603 96.7631 139.927 95.9281C143.191 93.9895 146.065 91.458 148.399 88.4641C149.263 87.4161 151.599 86.6561 150.543 83.8481C149.999 82.3841 148.647 80.9841 148.071 79.8481C147.663 79.0481 147.207 78.1441 146.695 77.2401C146.908 77.074 147.066 76.8484 147.15 76.592C147.234 76.3355 147.24 76.0599 147.167 75.8001C146.879 74.9521 139.967 67.0641 136.767 66.7041C135.9 66.8114 135.061 67.0829 134.295 67.5041C133.959 66.5761 133.623 65.7521 133.447 65.4001C132.359 63.2881 131.231 61.1601 130.007 59.1121C130.983 59.0481 132.975 58.8881 133.783 58.3601C134.359 57.9841 134.271 57.5601 134.023 56.6641C134.527 56.4961 134.903 56.3281 135.111 56.2401C137.775 55.1281 138.567 50.6401 138.855 47.8081C139.111 45.2801 140.399 24.8881 140.455 24.7281C141.255 23.8481 142.391 21.2961 142.975 20.3281C143.143 19.994 143.241 19.6293 143.263 19.2561C143.278 19.1228 143.253 18.9881 143.192 18.8687C143.131 18.7493 143.036 18.6504 142.919 18.5841C142.119 18.2001 141.407 18.7441 140.839 19.3841C141.012 18.8144 141.082 18.2185 141.047 17.6241C140.975 17.0801 140.607 16.6481 140.111 16.8241C139.85 16.9354 139.61 17.0895 139.399 17.2801C139.17 17.493 138.973 17.7382 138.815 18.0081C138.815 17.5201 138.815 16.8881 138.407 16.6721C138.273 16.6225 138.128 16.6096 137.988 16.635C137.847 16.6603 137.716 16.7228 137.607 16.8161C137.31 17.068 137.041 17.3525 136.807 17.6641C136.111 18.4641 135.815 20.0641 135.583 20.6801C134.783 20.3601 133.351 19.8401 133.063 20.6801C132.615 22.0481 134.847 22.3921 134.735 23.0801C134.191 26.4241 131.535 31.6081 129.743 38.6561C128.631 43.0321 129.207 42.6561 128.655 41.5441C128.263 40.7441 120.495 39.8721 119.599 39.7841C119.615 39.7503 119.623 39.7134 119.623 39.6761C119.623 39.6388 119.615 39.602 119.599 39.5681C119.031 39.1425 118.341 38.9099 117.631 38.9041C116.891 38.9383 116.18 39.1979 115.591 39.6481C115.503 39.6481 108.087 40.3361 104.271 41.8481C104.238 41.859 104.207 41.8783 104.183 41.9041C103.863 41.9041 103.527 41.9841 103.199 42.0321L103.263 39.4321C104.527 38.8241 105.775 38.0641 106.063 36.6801C106.313 35.3777 106.436 34.0542 106.431 32.7281C108.031 32.4321 108.831 30.9681 107.743 28.8961C107.644 28.4766 107.448 28.0864 107.17 27.757C106.892 27.4276 106.54 27.1683 106.143 27.0001C106.473 26.6249 106.668 26.1503 106.697 25.6517C106.726 25.153 106.587 24.659 106.303 24.2481C106.549 23.8333 106.623 23.3385 106.507 22.8702C106.392 22.4019 106.098 21.9975 105.687 21.7441C105.479 21.6259 105.251 21.5447 105.015 21.5041C104.959 21.5041 104.727 21.5601 104.583 21.5601C104.619 21.1507 104.521 20.7408 104.303 20.3921C104.158 20.1333 103.953 19.9131 103.706 19.7502C103.458 19.5873 103.174 19.4864 102.879 19.4561H102.591C102.584 19.352 102.542 19.2533 102.471 19.1761C102.298 18.9883 102.099 18.8267 101.879 18.6961C101.441 18.4687 100.947 18.3715 100.455 18.4161C100.329 18.4308 100.211 18.4871 100.119 18.5761C99.6473 17.7761 97.9273 17.9521 97.1433 18.4401C97.1077 18.3886 97.0676 18.3404 97.0233 18.2961C96.7642 18.1826 96.4795 18.1398 96.1985 18.1721C95.9174 18.2045 95.6499 18.3107 95.4233 18.4801C95.2429 18.6208 95.0767 18.7789 94.9273 18.9521C94.3882 18.7877 93.8064 18.8373 93.3029 19.0905C92.7994 19.3438 92.4127 19.7813 92.2233 20.3121C92.056 20.2709 91.8816 20.2674 91.7127 20.302C91.5439 20.3366 91.3849 20.4084 91.2473 20.5121C91.0102 20.6568 90.7831 20.8172 90.5673 20.9921C90.4384 21.1201 90.3382 21.274 90.2734 21.4437C90.2086 21.6133 90.1806 21.7948 90.1913 21.9761C89.7634 21.9514 89.3377 22.0536 88.9676 22.27C88.5976 22.4863 88.2997 22.8071 88.1113 23.1921C88.0583 23.3132 88.031 23.444 88.0313 23.5761C88.0313 24.1281 88.1033 23.8641 87.6873 24.0321C86.1313 20.3545 84.0305 16.9321 81.4553 13.8801C73.9353 5.18414 65.8313 5.90414 65.0873 5.68814C61.622 4.72309 57.9805 4.5725 54.4473 5.24814C52.9632 4.86061 51.4562 4.5667 49.9353 4.36814C33.8873 2.23214 21.3833 8.80014 13.9433 25.2641C5.4553 44.0001 5.8873 70.3521 7.0553 83.7441C7.2073 85.4881 11.8553 133.088 12.2473 134.864C12.2953 135.096 12.3753 135.256 12.8713 135.432C15.4393 136.336 27.4953 135.936 30.2793 135.848C30.7913 143.048 30.7513 142.76 30.8073 142.84C32.7275 143.331 34.6978 143.599 36.6793 143.64C37.0233 143.592 69.1113 137.904 83.3833 135.32C83.7273 136.488 86.3033 145.168 87.1593 146.024C87.247 146.108 87.3592 146.161 87.4793 146.176C88.5579 146.167 89.6318 146.033 90.6793 145.776C90.9593 146.696 91.2313 147.688 91.4793 148.672C91.2313 148.864 91.8233 148.816 87.7193 151.456C86.7963 152.007 85.9165 152.628 85.0873 153.312C84.6797 153.773 84.3816 154.32 84.2153 154.912C84.1593 155.109 84.1811 155.321 84.2764 155.502C84.3717 155.684 84.5331 155.822 84.7273 155.888C86.5913 156.512 99.4153 152.048 100.671 150.776C101.135 150.296 101.015 149.176 100.919 148.448C100.643 146.748 100.28 145.063 99.8313 143.4C100.471 143.208 103.319 142.352 103.831 141.912C104.551 141.272 103.559 137.112 103.327 136.136C101.607 129.192 97.4553 118.392 96.9273 115.392C97.3913 114.384 101.727 106.64 102.471 105.392C102.471 105.312 102.415 97.3441 102.471 96.0801C102.471 95.5521 102.551 93.5121 102.559 93.0561C102.554 93.035 102.554 93.0129 102.559 92.9916C102.563 92.9704 102.573 92.9504 102.586 92.9333C102.6 92.9162 102.617 92.9024 102.636 92.8929C102.656 92.8834 102.678 92.8784 102.699 92.8784C102.721 92.8784 102.743 92.8834 102.762 92.8929C102.782 92.9024 102.799 92.9162 102.812 92.9333C102.826 92.9504 102.835 92.9704 102.84 92.9916C102.845 93.0129 102.844 93.035 102.839 93.0561C103.225 96.868 103.286 100.706 103.023 104.528C103.023 108.84 102.903 121.232 105.527 124.656C108.151 128.08 138.455 140.424 139.743 139.776C140.287 139.504 142.287 136.352 142.695 135.712C144.431 136.205 146.131 136.817 147.783 137.544C147.775 137.581 147.775 137.619 147.783 137.656C148.199 138.688 147.471 144.056 147.671 145.44C147.814 146.046 148.087 146.614 148.471 147.104C148.597 147.266 148.779 147.374 148.982 147.405C149.184 147.436 149.391 147.389 149.559 147.272C151.111 146.168 155.151 133.2 154.879 131.448ZM71.1833 127.592C70.1913 125.144 70.0153 115.432 70.3353 112.952C70.9833 112.856 74.5193 112.344 78.2153 111.84C78.5433 116.312 79.9913 122.664 81.0873 127.04C78.8393 127.304 74.0473 127.84 71.9033 127.792H71.4153C71.2633 127.792 71.2713 127.808 71.1833 127.592ZM69.4073 87.2001C72.0473 86.8241 83.1193 85.2321 85.7833 85.0561C85.6553 85.5521 85.5513 86.0401 85.4633 86.4881C85.3111 86.8072 85.1802 87.1359 85.0713 87.4721C84.9193 88.3361 85.8713 88.2721 86.7913 88.2241C86.7913 88.4721 86.8633 88.7281 86.8953 89.0241C84.5086 92.9665 82.3711 97.0546 80.4953 101.264C78.2073 101.544 73.1833 102.064 70.9433 102.064H70.3673C69.5353 102.008 68.9833 90.6161 69.4073 87.2001ZM89.4073 71.2961C89.3253 70.2622 89.1838 69.2338 88.9833 68.2161C88.9833 68.1361 88.1113 64.0321 88.0873 63.9521C88.0073 63.6001 87.5833 62.0561 87.3513 62.0961C87.1193 62.1361 87.3513 63.6961 87.4073 64.1681C87.5673 65.0241 87.8153 66.0321 87.9913 66.7441C86.9353 67.2881 82.0553 71.3921 79.3273 72.3441C78.6431 72.6861 77.9312 72.9698 77.1993 73.1921C77.1113 73.1921 76.8953 72.5681 76.8633 72.4801C76.5372 71.1404 76.1175 69.8251 75.6073 68.5441C74.9273 66.8001 71.8553 60.4001 72.3113 59.2001C72.9513 58.6961 75.4313 57.2801 76.1433 56.8721C82.6633 53.1521 82.3033 53.6721 82.7433 53.0641C83.0786 52.3914 83.4498 51.7371 83.8553 51.1041C85.9913 48.9441 88.6073 46.3681 91.6233 45.2721C90.4793 47.3921 87.4953 52.7921 87.3353 53.0961C87.3113 53.1408 87.2996 53.1909 87.3012 53.2416C87.3028 53.2922 87.3178 53.3415 87.3446 53.3845C87.3714 53.4275 87.409 53.4627 87.4537 53.4865C87.4985 53.5103 87.5487 53.5219 87.5993 53.5201C87.8953 53.5201 89.8073 53.3201 90.1593 53.2801C88.0953 55.4561 87.3593 56.0481 87.5113 56.5201C88.9556 59.9018 90.5875 63.2003 92.3993 66.4001C93.2633 69.7201 96.1753 74.3201 95.3673 77.5121C94.7592 80.0435 93.8961 82.5068 92.7913 84.8641C92.5113 85.4241 92.3913 86.8321 92.0553 87.2081C90.9381 87.4015 89.8049 87.4873 88.6713 87.4641C88.0793 87.4641 86.3513 87.6241 85.7913 87.5441C85.8633 87.3121 86.1033 86.9041 86.1513 86.6561C87.1273 81.8561 88.1673 81.7841 89.7593 77.0561C90.1993 75.6881 89.4553 72.7441 89.4553 71.3121L89.4073 71.2961ZM43.5433 73.8161C43.3993 73.7521 43.3913 73.8161 43.5433 73.7361C44.7753 73.3201 46.6553 72.4401 47.6073 73.3201C48.1273 73.8001 46.6153 75.0001 46.2313 75.8801C45.6211 74.8836 44.6636 74.1483 43.5433 73.8161ZM42.1513 73.9041C42.3462 73.9742 42.5569 73.9881 42.7593 73.9441C42.9903 73.9639 43.2184 74.0095 43.4393 74.0801C48.6793 76.4241 44.8233 81.7761 40.9193 80.8161C38.5913 80.2561 37.1513 77.4801 38.4073 75.5921C38.8498 75.0306 39.4211 74.584 40.0728 74.2902C40.7246 73.9963 41.4375 73.8639 42.1513 73.9041ZM47.8553 73.0241C46.5513 71.8721 44.1993 73.2721 42.9033 73.6161C42.6393 73.565 42.3719 73.5329 42.1033 73.5201C41.5513 73.1121 41.4393 72.3681 42.3673 71.8481C43.7945 71.1114 45.2894 70.5139 46.8313 70.0641C48.3148 69.7634 49.8536 69.8967 51.2633 70.4481C51.2948 70.462 51.3289 70.4692 51.3633 70.4692C51.3977 70.4692 51.4318 70.462 51.4633 70.4481C63.8633 64.3281 68.0953 62.2561 71.8553 60.6081C72.5433 63.6321 75.1513 68.4161 75.8073 70.9121C67.8793 72.6241 50.1033 73.9761 49.6073 74.9921C49.1113 76.0081 48.0073 77.1441 46.9273 76.6881C45.5193 76.0881 49.0313 74.0961 47.8553 73.0241ZM72.8393 58.1281C72.209 58.1628 71.577 58.1143 70.9593 57.9841C70.9593 53.9841 67.0313 19.6561 68.6713 17.9841C69.1193 17.5361 70.4713 17.9361 71.0713 18.1681C73.0873 18.9681 75.9913 21.0241 78.9353 25.0241C82.7433 30.2081 85.3353 36.8721 86.9353 43.1201C87.221 44.4563 87.4293 45.8079 87.5593 47.1681C86.1322 48.2539 84.7946 49.4524 83.5593 50.7521C83.0073 51.2961 82.5833 52.8081 82.0393 53.0721C80.0793 54.0641 74.9833 56.8001 72.8393 58.1281ZM92.4873 37.6001C92.5794 37.8018 92.7284 37.9721 92.916 38.09C93.1036 38.208 93.3217 38.2685 93.5433 38.2641L94.1993 44.0161L92.4873 44.6161C92.4057 42.1992 92.1382 39.7921 91.6873 37.4161C91.9268 37.5631 92.2077 37.6277 92.4873 37.6001ZM110.663 40.5841C108.687 43.6001 106.191 49.6161 106.183 50.1841C106.183 50.9841 108.343 50.4961 110.127 50.5281C109.279 52.4961 105.951 58.8641 104.863 60.9281C104.863 57.3201 104.775 56.7121 104.783 55.3281C104.783 52.4161 105.191 51.6001 105.383 48.2481C105.58 46.2244 105.32 44.1823 104.623 42.2721C106.561 41.4688 108.589 40.9047 110.663 40.5921V40.5841ZM95.6553 78.9841C99.2286 78.911 102.783 78.4469 106.255 77.6001C106.439 78.7862 106.535 79.984 106.543 81.1841C102.585 80.8124 98.5921 81.0989 94.7273 82.0321C95.0553 81.0641 95.3673 80.0401 95.6553 79.0001V78.9841ZM96.1193 75.6001C95.9229 74.1708 95.5355 72.7743 94.9673 71.4481C98.0233 71.2321 101.751 70.8081 104.839 70.3601C105.007 71.6401 105.223 72.9121 105.487 74.1921C102.39 74.8236 99.2639 75.2989 96.1193 75.6161V75.6001ZM91.1993 52.8561C91.1997 52.8105 91.1903 52.7654 91.1717 52.7237C91.1532 52.682 91.126 52.6448 91.0919 52.6145C91.0578 52.5841 91.0176 52.5615 90.9741 52.548C90.9305 52.5345 90.8846 52.5304 90.8393 52.5361C90.8393 52.5361 88.9753 52.8081 88.0633 52.9041C88.6153 51.8001 91.6233 45.9201 92.0633 45.1121C92.8633 44.8161 92.5513 44.9281 94.2713 44.3841C93.2262 47.9723 92.4192 51.6256 91.8553 55.3201C91.4069 58.1324 91.3799 60.9959 91.7753 63.8161C90.9753 62.2161 88.7593 58.0401 88.1833 56.4081C88.9673 55.3201 91.2073 53.4081 91.1993 52.8721V52.8561ZM90.5673 52.7761V52.8641C90.5673 52.8641 90.5353 52.8001 90.5673 52.8001V52.7761ZM92.5513 63.9761C96.0153 63.6801 100.439 63.0961 104.191 62.4241C104.208 62.4659 104.232 62.504 104.263 62.5361C104.263 63.8961 104.351 65.2401 104.455 66.5841C101.471 66.9601 96.5273 67.5281 93.4233 67.7281C93.2372 67.2464 93.077 66.755 92.9433 66.2561C93.0473 66.0001 92.8553 65.9361 92.5513 64.0001V63.9761ZM104.103 58.8161C96.9033 60.0561 93.7513 60.5761 92.2473 60.7441C92.1835 59.2325 92.2424 57.7182 92.4233 56.2161C98.4713 55.6721 97.2233 55.8481 104.087 54.8721C104.079 54.9921 104.087 57.3841 104.103 58.8081V58.8161ZM122.503 84.7601C122.695 84.5761 122.583 84.3201 122.503 83.9601C124.215 87.5361 124.903 91.5041 125.623 91.7601C125.911 91.8232 126.208 91.8232 126.495 91.7601C126.983 93.1041 128.663 97.6081 128.895 98.9601C126.751 99.7601 124.055 101.08 122.735 100.8C121.607 98.7761 120.023 88.0721 119.655 85.6561C119.726 85.6571 119.795 85.6376 119.855 85.6001C121.087 85.0241 121.255 86.0241 122.519 84.7521L122.503 84.7601ZM149.567 83.5441C150.975 86.3121 148.767 86.8081 147.799 88.0241C145.519 90.9507 142.714 93.4276 139.527 95.3281C138.26 96.1329 136.894 96.7702 135.463 97.2241C134.583 97.4481 131.503 98.4641 129.623 98.9121C128.941 96.4501 128.116 94.0299 127.151 91.6641C128.845 91.1397 130.476 90.4315 132.015 89.5521C132.126 89.9537 132.296 90.3366 132.519 90.6881C132.584 90.7836 132.666 90.8653 132.762 90.9287C132.858 90.9921 132.966 91.0358 133.079 91.0573C133.192 91.0789 133.308 91.0779 133.421 91.0543C133.534 91.0308 133.64 90.9852 133.735 90.9201C134.19 90.604 134.608 90.2392 134.983 89.8321C135.359 89.4001 135.343 89.2481 134.655 87.8801C136.975 86.2801 139.119 84.4001 141.271 82.5601C141.518 83.0615 141.867 83.5058 142.295 83.8641C142.467 83.968 142.67 84.0088 142.868 83.9796C143.067 83.9504 143.249 83.853 143.383 83.7041C143.752 83.2931 144.074 82.8423 144.343 82.3601C144.599 81.8641 144.543 81.6881 143.607 80.5761C144.529 79.7192 145.383 78.791 146.159 77.8001C146.607 78.6001 147.023 79.4001 147.391 80.2001C147.895 81.1441 148.959 82.3041 149.583 83.5361L149.567 83.5441ZM134.447 89.1441C134.503 89.2961 134.559 89.2321 134.383 89.4161C134.1 89.7027 133.798 89.97 133.479 90.2161C132.895 90.6161 133.207 90.2161 131.279 86.7921C131.853 86.5513 132.455 86.3846 133.071 86.2961C133.311 86.6881 134.255 88.5441 134.463 89.1361L134.447 89.1441ZM143.743 81.9441C143.52 82.355 143.266 82.7481 142.983 83.1201C142.575 83.5681 142.551 83.2001 141.239 81.6001C140.247 80.3761 140.335 80.6001 140.439 80.4881C140.806 80.0716 141.229 79.7081 141.695 79.4081C141.975 79.6961 143.471 81.4481 143.759 81.9361L143.743 81.9441ZM136.655 67.3761C139.551 67.7121 146.255 75.4721 146.463 76.0161C146.671 76.5601 146.015 76.8161 145.719 77.2321C144.943 78.2282 144.09 79.1617 143.167 80.0241C142.804 79.6011 142.402 79.2128 141.967 78.8641C141.607 78.6721 141.231 79.0481 140.919 79.3921C140.62 79.7378 140.352 80.11 140.119 80.5041C140.119 80.6161 140.039 80.5041 140.919 81.9441C138.807 83.7601 136.655 85.6401 134.375 87.2561C134.117 86.7714 133.82 86.3085 133.487 85.8721C133.191 85.6081 132.599 85.8721 132.087 86.0721C131.721 86.2396 131.366 86.4293 131.023 86.6401C130.895 86.7601 130.935 86.6401 131.823 88.9201C130.775 89.5281 126.951 91.4881 125.903 91.2241C125.271 90.2641 124.087 85.4721 122.335 82.6881C122.087 81.3041 121.703 79.2241 121.279 76.9121C125.847 72.6081 135.255 67.2001 136.655 67.3761ZM130.703 69.4561C129.103 70.4481 127.319 71.6081 125.703 72.7841C123.519 64.7201 123.839 65.1201 120.847 58.6161C122.192 58.8891 123.556 59.0496 124.927 59.0961C127.189 62.3478 129.119 65.8186 130.687 69.4561H130.703ZM135.319 23.2001C135.535 21.9281 133.399 21.6481 133.647 20.8801C133.799 20.8161 134.111 20.8001 135.351 21.2881C135.575 21.3761 135.775 21.4641 135.951 21.2881C136.295 20.9521 136.599 18.8881 137.287 18.0881C137.486 17.7846 137.732 17.5145 138.015 17.2881C138.044 18.2041 137.906 19.1177 137.607 19.9841C137.486 20.2143 137.395 20.459 137.335 20.7121C137.327 20.7643 137.331 20.8175 137.345 20.8683C137.359 20.919 137.384 20.9661 137.418 21.0063C137.453 21.0465 137.495 21.0789 137.543 21.1013C137.591 21.1237 137.643 21.1356 137.695 21.1361C137.959 21.1361 138.039 20.9121 138.119 20.6801C138.199 20.4481 138.207 20.4161 138.255 20.2481C138.638 19.354 139.15 18.5211 139.775 17.7761C139.855 17.7121 140.183 17.2961 140.231 17.4641H140.143C140.295 17.5441 140.279 17.9921 140.263 18.1601C140.109 19.1454 139.841 20.1092 139.463 21.0321C139.432 21.1098 139.427 21.196 139.451 21.2765C139.475 21.3569 139.526 21.4267 139.595 21.4743C139.664 21.522 139.748 21.5446 139.831 21.5383C139.915 21.5321 139.994 21.4975 140.055 21.4401C140.519 20.9761 141.695 18.9361 142.455 19.2001C142.448 19.4611 142.386 19.7175 142.271 19.9521C141.727 20.8561 140.447 23.6321 139.783 24.2961C139.71 24.3999 139.666 24.5215 139.655 24.6481C139.655 24.8881 138.855 37.5281 138.647 40.1121C138.279 44.4641 138.839 54.1361 134.895 55.8641C134.695 55.9601 134.343 56.1201 133.863 56.2961C132.967 53.1361 130.319 45.8961 129.143 42.9041C130.623 34.5681 134.647 27.1121 135.319 23.2001ZM128.119 41.8321C128.671 43.0721 133.247 55.6801 133.463 57.6641C133.407 57.8001 132.919 57.9681 132.767 58.0081C129.847 58.8641 120.703 58.3921 120.351 57.6401C120.317 57.5742 120.264 57.5203 120.198 57.4858C120.133 57.4514 120.058 57.438 119.984 57.4477C119.911 57.4573 119.842 57.4894 119.787 57.5396C119.733 57.5898 119.695 57.6557 119.679 57.7281C119.664 57.8064 119.667 57.8872 119.689 57.9638C119.712 58.0404 119.752 58.1105 119.807 58.1681C123.207 65.5041 122.735 64.8401 125.031 73.2401C123.671 74.2491 122.37 75.3363 121.135 76.4961C119.535 67.7841 117.135 55.0481 117.015 54.0961C116.639 50.0961 116.551 43.2961 119.127 40.1921C120.959 40.3921 126.503 41.1281 128.151 41.8321H128.119ZM119.199 39.6961C116.183 42.4481 116.159 50.0961 116.479 54.1601C116.631 56.0641 121.647 83.0161 121.863 84.3681C121.343 84.8481 121.191 84.7281 120.839 84.6961C120.475 84.6583 120.108 84.7191 119.775 84.8721C118.351 81.7601 112.983 53.3841 113.519 48.6801C113.823 46.0321 114.591 42.2081 115.823 39.8401C116.304 39.4597 116.892 39.2409 117.504 39.215C118.116 39.1892 118.721 39.3576 119.231 39.6961H119.199ZM115.311 40.0481C114.129 42.7785 113.355 45.6682 113.015 48.6241C112.399 53.4241 116.343 74.2241 117.927 80.9281C115.397 81.8147 112.948 82.9174 110.607 84.2241C109.663 84.7921 108.103 86.4961 107.223 86.6961C106.967 86.4081 107.151 84.8321 107.151 84.5841C107.151 82.7601 107.191 81.0881 107.063 79.4001C106.727 75.1281 105.087 72.9201 104.759 62.5121C104.887 62.3681 109.983 52.6561 110.775 50.6081C110.863 50.4464 110.883 50.2566 110.831 50.0801C110.711 49.8401 110.415 49.8481 110.127 49.8481C109.327 49.8481 107.415 50.0641 106.783 49.9921C107.886 46.7549 109.281 43.6247 110.951 40.6401C115.855 40.0001 114.591 40.1041 115.343 40.0481H115.311ZM104.111 42.2721C104.823 44.9761 105.143 45.7601 104.367 51.5761C102.855 51.9441 101.343 52.3121 99.6713 52.5761C98.3593 52.7921 93.7913 53.4241 92.8393 53.3761C93.5673 48.5761 93.6393 48.9601 94.4873 45.0401C95.3433 47.5841 97.0233 50.7281 99.7033 51.0481C102.383 51.3681 103.767 49.5441 104.095 46.9361C104.223 45.8801 103.511 43.3921 103.207 42.3841L104.111 42.2721ZM105.455 36.5521C105.199 37.6881 104.039 38.3361 102.983 38.8161C102.775 38.9121 102.599 39.0001 102.591 39.2241C102.506 40.2645 102.477 41.3086 102.503 42.3521C102.783 43.2401 103.543 45.9361 103.423 46.8641C103.151 49.0321 101.999 50.6081 99.8153 50.3441C97.2793 50.0401 95.5673 46.4161 94.9353 43.9441C94.9353 43.6401 94.2473 38.1361 94.2393 38.0641C94.4068 37.9544 94.5305 37.7895 94.589 37.598C94.6474 37.4066 94.6369 37.2007 94.5593 37.0161C94.4881 36.8729 94.4318 36.7228 94.3913 36.5681C94.3913 36.3361 94.2153 35.5281 94.1353 35.1921C94.0553 34.8561 93.9753 34.8481 93.8633 34.8001C92.2633 34.1601 91.4153 32.8641 92.1353 31.1601C92.2329 30.9912 92.3751 30.8524 92.5463 30.7588C92.7175 30.6653 92.9112 30.6206 93.1061 30.6297C93.301 30.6387 93.4896 30.7012 93.6514 30.8103C93.8132 30.9194 93.9418 31.0709 94.0233 31.2481C94.1665 31.6769 94.383 32.0775 94.6633 32.4321C95.0553 32.8401 95.4633 32.6001 95.6313 32.1281C95.7993 31.6561 95.5593 31.2241 95.7753 29.6801C95.8873 28.8801 96.0553 28.1841 96.1993 27.4241C96.2553 27.1601 96.0073 26.0961 96.1353 26.0081C96.7433 25.5921 97.1833 26.0881 97.7993 26.4881C98.7193 27.0881 99.7353 27.6401 100.799 27.2881C101.979 27.0281 103.068 26.4562 103.951 25.6321C104.274 26.0491 104.636 26.4348 105.031 26.7841C105.159 26.8721 105.143 26.8401 105.159 26.8961C103.655 27.1841 103.367 28.3361 103.663 29.8321C103.199 29.9281 102.591 30.2481 102.239 30.3441C102.033 29.7816 101.665 29.2921 101.183 28.9361C100.774 28.5677 100.268 28.325 99.7243 28.2371C99.1809 28.1491 98.6237 28.2196 98.1193 28.4401C96.9353 28.8561 95.7193 30.8401 96.5193 32.9281C96.6338 33.2819 96.82 33.6083 97.0663 33.8868C97.3126 34.1654 97.6138 34.3901 97.9509 34.5471C98.288 34.704 98.6538 34.7897 99.0256 34.7988C99.3973 34.8079 99.7669 34.7403 100.111 34.6001C100.581 34.464 101.019 34.2344 101.399 33.9251C101.778 33.6158 102.091 33.2332 102.319 32.8001C102.535 32.2036 102.558 31.5541 102.383 30.9441C102.519 30.9441 102.743 30.9441 102.943 30.8881C103.077 31.4375 103.262 31.9731 103.495 32.4881C103.543 32.6001 103.847 33.3361 103.775 33.4161C103.636 33.5618 103.48 33.6907 103.311 33.8001C103.207 33.8561 103.103 33.8641 103.103 33.9841C103.103 34.3041 103.903 34.0321 104.159 33.8481C104.415 33.6641 104.495 33.1921 104.367 32.7681C104.142 32.053 103.796 31.3818 103.343 30.7841L103.799 30.5441C104.127 31.5201 104.855 32.6321 105.871 32.7761C105.85 34.045 105.71 35.309 105.455 36.5521ZM101.791 32.5521C101.143 33.8561 98.8073 34.7841 97.6473 33.6161C97.4308 33.3848 97.2622 33.1129 97.1513 32.8161C96.9809 32.4057 96.9032 31.9627 96.924 31.5187C96.9447 31.0748 97.0633 30.6409 97.2713 30.2481C97.4671 29.7509 97.8367 29.3416 98.3113 29.0961C98.7337 28.8701 99.212 28.7696 99.6897 28.8064C100.167 28.8433 100.625 29.016 101.007 29.3041C101.419 29.7161 101.707 30.2341 101.842 30.8005C101.976 31.3669 101.95 31.9595 101.767 32.5121L101.791 32.5521ZM107.463 29.0481C108.007 30.4721 107.823 31.7841 106.343 32.0801C104.863 32.3761 103.447 28.3921 104.847 27.7681C106.087 27.1201 106.799 27.7521 107.439 29.0081L107.463 29.0481ZM104.455 21.5281C104.455 21.5281 104.519 21.5281 104.535 21.5921C104.551 21.6561 104.423 21.5281 104.431 21.4881L104.455 21.5281ZM97.3273 18.6321C97.3273 18.6321 97.2473 18.6321 97.1993 18.5761C97.2953 18.5041 97.3913 18.4961 97.3033 18.5921L97.3273 18.6321ZM12.8073 134.768C12.3833 132.984 7.8153 84.7281 7.7193 83.6801C6.5913 70.4001 6.1753 44.1601 14.5993 25.6001C21.6073 10.0801 33.0873 3.56014 48.0153 4.88014C49.2073 4.98414 50.3273 5.13614 51.4153 5.32814C26.5513 5.95214 17.5353 30.4721 15.2313 55.4001C14.3732 65.2642 14.3732 75.1841 15.2313 85.0481C15.5593 88.8081 20.0313 133.328 20.3753 135.448C19.3593 135.424 13.7033 135.368 12.8073 134.768ZM20.6633 135.44C19.8073 129.496 16.2393 90.6401 15.7753 85.0401C14.2553 66.9921 15.3033 43.2001 22.7113 26.8721C27.9833 15.2401 36.7193 6.60014 50.9593 6.07214C26.8793 13.3361 25.2873 50.2801 26.1033 75.3601C26.2233 78.6961 29.0233 118.56 30.2153 135.36C26.6313 135.416 23.3753 135.464 20.6553 135.44H20.6633ZM36.5033 143.4C36.0393 137.16 32.3353 80.2801 32.2153 76.1521C31.3433 47.6481 33.9433 9.08014 62.3753 6.55214C74.3353 5.48014 82.2553 13.4321 87.0553 24.4881C86.5263 25.1704 86.2774 26.0287 86.3593 26.8881C86.4247 27.0894 86.5436 27.2692 86.7033 27.4081C86.4758 27.655 86.3136 27.9547 86.2313 28.2801C86.2296 28.6688 86.3263 29.0517 86.5123 29.393C86.6983 29.7343 86.9677 30.0229 87.2953 30.2321C87.2393 30.3361 87.1993 30.4161 87.1833 30.4561C86.7753 31.8721 87.1833 32.4241 87.9833 32.8561C87.856 33.3394 87.8995 33.8517 88.1065 34.3066C88.3135 34.7614 88.6713 35.1308 89.1193 35.3521C89.3265 35.4052 89.538 35.44 89.7513 35.4561C89.7275 35.6581 89.7275 35.8622 89.7513 36.0641C89.8633 36.5281 90.3113 36.6721 90.7833 36.7201C91.3347 39.416 91.6559 42.1539 91.7433 44.9041C90.4602 45.3441 89.2497 45.9723 88.1513 46.7681C88.0158 45.5102 87.8128 44.2604 87.5433 43.0241C85.8473 36.6241 83.2633 30.0401 79.2953 24.8001C74.6153 18.6161 69.5513 16.7281 68.4313 17.8481C66.4793 19.8001 70.3433 55.5281 70.2553 58.1121C70.2553 58.7281 71.2233 58.7921 71.8553 58.8241C71.6761 59.151 71.6167 59.5301 71.6873 59.8961C64.8713 62.8881 51.3673 69.8961 51.2873 69.9441C49.8053 69.4065 48.1994 69.3093 46.6633 69.6641C45.1041 70.1453 43.5956 70.7776 42.1593 71.5521C41.1993 72.1201 41.1273 72.9201 41.6313 73.5121C38.9033 73.5121 36.7353 75.4481 37.3913 78.1521C37.5759 78.8852 37.936 79.5624 38.4404 80.1254C38.9449 80.6884 39.5786 81.1204 40.2871 81.3841C40.9955 81.6478 41.7575 81.7353 42.5073 81.6392C43.2571 81.543 43.9723 81.2661 44.5913 80.8321C45.2366 80.4396 45.7638 79.88 46.1172 79.2125C46.4707 78.545 46.6373 77.7945 46.5993 77.0401C47.9113 77.7761 49.3433 76.5761 50.0473 75.2641C51.1593 74.7761 62.1273 73.6641 68.1833 72.8641C71.1513 72.4641 73.9193 72.0641 75.9753 71.6001C76.105 72.3637 76.3939 73.0915 76.8233 73.7361C77.3273 74.2481 78.9593 73.2401 79.6313 73.0081C82.3273 72.0961 86.8313 68.3841 88.1833 67.5361C88.4588 68.781 88.6539 70.0422 88.7673 71.3121C88.7673 72.6721 89.4873 75.6961 89.1273 76.7841C87.9193 80.4001 86.7273 81.7761 86.0073 84.4001C83.1513 84.5921 72.0633 86.4721 69.3033 86.9521C69.2727 86.9556 69.2441 86.9693 69.2223 86.9911C69.2005 87.0129 69.1867 87.0415 69.1833 87.0721C68.7513 89.6481 68.6953 100.152 69.8633 102.384C70.0233 102.696 70.6633 102.688 71.1993 102.688C72.9913 102.688 76.7513 102.4 80.2633 101.992C79.3044 104.166 78.6295 106.454 78.2553 108.8C78.1849 109.66 78.1849 110.524 78.2553 111.384C74.1593 112.04 70.2553 112.712 70.2553 112.712C70.2271 112.719 70.2016 112.734 70.1817 112.756C70.1619 112.777 70.1485 112.803 70.1433 112.832C69.7113 115.416 69.6473 125.912 70.8153 128.152C70.8755 128.254 70.9731 128.329 71.0873 128.36C72.2313 128.744 80.1353 127.88 81.3433 127.744C81.9673 130.2 82.6393 132.632 83.2873 134.88C68.7993 137.52 37.5273 143.2 36.5033 143.4ZM99.3513 143.568C99.5593 144.576 99.7913 145.656 99.9753 146.672L91.8953 148.56C91.6393 147.592 91.3353 146.624 91.0233 145.72C93.5593 145.184 96.8153 144.328 99.3513 143.568ZM142.799 135.456C144.287 133.112 146.103 130.136 147.463 127.728C148.599 128.264 149.959 128.872 151.175 129.472L147.855 137.088C146.209 136.431 144.52 135.885 142.799 135.456Z"
        fill="#1C1917"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M100.111 31.3761C100.13 31.3028 100.129 31.2256 100.108 31.153C100.086 31.0803 100.045 31.015 99.9891 30.9639C99.9331 30.9129 99.8642 30.8781 99.7899 30.8633C99.7156 30.8485 99.6387 30.8543 99.5674 30.8801C99.1754 31.0321 99.3514 31.4721 99.3354 31.9041C99.3332 31.958 99.342 32.0117 99.3611 32.0621C99.3803 32.1125 99.4094 32.1585 99.4467 32.1973C99.4841 32.2362 99.5289 32.2671 99.5785 32.2882C99.6281 32.3093 99.6815 32.3201 99.7354 32.3201C99.8382 32.3183 99.9365 32.2777 100.011 32.2065C100.085 32.1353 100.129 32.0387 100.135 31.9361C100.135 31.7761 100.119 31.5521 100.111 31.3761ZM105.519 29.6641C105.513 29.6116 105.495 29.5609 105.469 29.515C105.443 29.4691 105.407 29.4288 105.365 29.3965C105.323 29.3642 105.276 29.3404 105.224 29.3266C105.173 29.3129 105.12 29.3093 105.067 29.3161C105.015 29.3229 104.964 29.34 104.918 29.3664C104.872 29.3929 104.832 29.4281 104.8 29.47C104.767 29.512 104.744 29.5599 104.73 29.6111C104.716 29.6622 104.713 29.7156 104.719 29.7681C104.748 29.9793 104.794 30.1879 104.855 30.3921C104.867 30.4474 104.89 30.4996 104.924 30.5452C104.957 30.5908 105 30.6288 105.049 30.6567C105.098 30.6846 105.153 30.7018 105.209 30.7071C105.265 30.7124 105.322 30.7058 105.376 30.6876C105.429 30.6693 105.478 30.64 105.519 30.6015C105.561 30.5629 105.593 30.516 105.615 30.4639C105.637 30.4118 105.648 30.3557 105.647 30.2992C105.645 30.2426 105.632 30.1871 105.607 30.1361C105.568 29.9807 105.539 29.8231 105.519 29.6641ZM102.711 36.1281C102.631 36.1281 101.911 35.8481 101.839 35.9521C101.767 36.0561 101.911 36.6561 102.495 36.8161C103.079 36.9761 103.543 36.6081 103.519 36.4721C103.495 36.3361 103.503 36.3601 102.711 36.1281ZM125.375 16.3281C126.063 15.0401 128.879 13.3601 129.711 13.2561C129.75 13.2561 129.786 13.2409 129.813 13.2139C129.84 13.1869 129.855 13.1503 129.855 13.1121C129.855 13.0739 129.84 13.0373 129.813 13.0103C129.786 12.9833 129.75 12.9681 129.711 12.9681C128.311 12.7361 125.503 14.2321 125.095 16.2321C125.083 16.2692 125.085 16.3099 125.102 16.3452C125.12 16.3804 125.15 16.4074 125.187 16.4201C125.225 16.4328 125.265 16.4303 125.3 16.413C125.336 16.3958 125.363 16.3652 125.375 16.3281ZM129.719 17.4321C129.236 17.5779 128.792 17.8305 128.419 18.1711C128.047 18.5118 127.756 18.9318 127.567 19.4001C127.186 20.3102 127.091 21.3148 127.295 22.2801C127.303 22.3115 127.321 22.3395 127.346 22.3595C127.372 22.3795 127.403 22.3904 127.435 22.3904C127.468 22.3904 127.499 22.3795 127.525 22.3595C127.55 22.3395 127.568 22.3115 127.575 22.2801C127.655 21.7521 127.815 21.1281 127.847 20.9841C127.987 20.0211 128.41 19.1215 129.063 18.4001C129.791 17.6001 130.023 17.6801 129.919 17.4801C129.898 17.4485 129.866 17.426 129.829 17.4171C129.792 17.4082 129.753 17.4136 129.719 17.4321Z"
        fill="#1C1917"
        fillRule="evenodd"
      />
    </svg>
  );
};
